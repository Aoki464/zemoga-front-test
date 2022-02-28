import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataTwitterService {

  constructor(private http: HttpClient) { }

  baseURL = environment.baseUrl
  getUserData(params: any): Observable<any> {
    return this.http
      .get(this.baseURL + 'user', { params })
      .pipe(map((res: Response) => res));
  }  

  getUserTimeLineTweets(params: any): Observable<any> {
    return this.http
      .get(this.baseURL + 'timeLine', { params })
      .pipe(map((res: Response) => res));
  }  
}
