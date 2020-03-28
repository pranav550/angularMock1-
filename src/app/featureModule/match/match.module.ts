import { MatchValueDirective } from './../../shared/directive/match-value.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { RouterModule, Routes } from  '@angular/router';
const routes: Routes=[
  {path:'', children:[
    {path:'confirm-password', component: ConfirmPasswordComponent},
    
  ]}
]



@NgModule({
  declarations: [ConfirmPasswordComponent, MatchValueDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class MatchModule { }
