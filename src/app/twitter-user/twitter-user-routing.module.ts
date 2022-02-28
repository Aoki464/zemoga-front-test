import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TwitterUserInfoComponent} from '../TwitterUser/twitter-user-info/twitter-user-info.component';

const routes: Routes = [
{ path: 'userProfile', component: TwitterUserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterUserRoutingModule { }
