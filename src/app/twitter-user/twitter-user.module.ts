import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { TwitterUserRoutingModule } from './twitter-user-routing.module';
import { TwitterUserInfoComponent } from '../TwitterUser/twitter-user-info/twitter-user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TwitterUserInfoComponent],
  imports: [
    CommonModule,
    TwitterUserRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule ,
    FormsModule,
    MatCardModule
  ],
  exports: [
    TwitterUserInfoComponent
  ]
})
export class TwitterUserModule { }
