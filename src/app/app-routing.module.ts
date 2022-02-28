import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwitterUserInfoComponent } from './TwitterUser/twitter-user-info/twitter-user-info.component';



const routes: Routes = [ 
{ path: '', loadChildren: () => import('./twitter-user/twitter-user.module').then(m => m.TwitterUserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true
    })],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
