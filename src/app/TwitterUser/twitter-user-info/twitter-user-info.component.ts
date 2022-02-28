import { Component, OnDestroy, OnInit } from '@angular/core';
import {UserDataTwitterService} from '../../Services/user-data-twitter.service';
import { HttpParams } from '@angular/common/http';
import { Observable, concat, Subject, forkJoin } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-twitter-user-info',
  templateUrl: './twitter-user-info.component.html',
  styleUrls: ['./twitter-user-info.component.css']
})
export class TwitterUserInfoComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  messageError: String;
  twitterUserDataForm: FormGroup;

  constructor(private userDataTwitterService: UserDataTwitterService,
              private formBuilder: FormBuilder) { 

                this.createQuestionCohortForm();
              }
  
  userData;
  timeLineComments;
  loadingSubmit=false;
  NUMERIC_PATTERN = '[0-9]+';; 


  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  createQuestionCohortForm(): void {
    this.twitterUserDataForm = this.formBuilder.group(
      {
        twitterUser: ['', []],
        tweetsCounter: ['', [Validators.pattern(this.NUMERIC_PATTERN)]]
      },
    );
  }

  cleanFilters() {
    Object.keys(this.twitterUserDataForm.controls).forEach(key =>
      this.twitterUserDataForm.get(key).setValue('')
    );
  }

  getUserProfile() {
    this.loadingSubmit = true;
    const userDataCall = this.userDataTwitterService
    .getUserData(this.getParamsUserData(this.twitterUserDataForm))
    .pipe(takeUntil(this.destroy$));
    
    const timeLineCall = this.userDataTwitterService
    .getUserTimeLineTweets(this.getParamsTimeLine(this.twitterUserDataForm))    
    .pipe(takeUntil(this.destroy$));
   

    forkJoin([userDataCall, timeLineCall]).subscribe((results: any) => {
      this.userData = results[0];      
      this.loadingSubmit = false;
      console.log(this.userData);
      //console.log(this.timeLineComments);
     
      if(!this.userData || (this.userData  && this.userData.length < 0)) {
        this.messageError = "No se encontro ningun registro asociado a la base de datos"
        this.timeLineComments = '';
      } else {
        this.messageError = ''
        this.timeLineComments = results[1];
      }

    }, (catchError) => {
      console.log(catchError);
      
      
    });
  }

  getParamsUserData(twitterUserDataForm: FormGroup,): HttpParams {
      let {
        twitterUser
      } = twitterUserDataForm.value;

      twitterUser = !twitterUser ? '' : twitterUser;

      return new HttpParams()
        .set('twitterUser', twitterUser.toString());  
    }
 

  getParamsTimeLine(twitterUserDataForm: FormGroup,): HttpParams {
    let {
      twitterUser,
      tweetsCounter
    } = twitterUserDataForm.value;

    twitterUser = !twitterUser ? '' : twitterUser;
    tweetsCounter = !tweetsCounter ? '' : tweetsCounter;

    return new HttpParams()
      .set('twitterUser', twitterUser.toString())
      .set('countTweets', tweetsCounter.toString());
  }

  /*getUserData() {
    this.userDataTwitterService
      .getUserData(
        this.getParamsUserData(this.twitterUserDataForm))
      .subscribe(
        result => {
          if(!result) {
            this.messageError = 'No se han encontrado resultados';
          } else {
              this.userData = result;
          }
          
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  getTimeLine() {
    this.userDataTwitterService
      .getUserData(
        this.getParamsUserData(this.twitterUserDataForm))
      .subscribe(
        result => {
          if(!result) {
            this.messageError = 'No se han encontrado resultados';
          } else {
              this.userData = result;
          }
          
        },
        (error) => {
          console.log(error.error);
        }
      );
  }*/
}
