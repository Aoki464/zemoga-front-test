import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterUserInfoComponent } from './TwitterUser/twitter-user-info/twitter-user-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterUserModule } from './twitter-user/twitter-user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
    TwitterUserModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
