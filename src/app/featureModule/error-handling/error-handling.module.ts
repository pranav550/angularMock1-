import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'', children:[
    {path:'error-handling', component: ErrorHandlingComponent},
    
  ]}
]

@NgModule({
  declarations: [ErrorHandlingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ErrorHandlingModule { }
