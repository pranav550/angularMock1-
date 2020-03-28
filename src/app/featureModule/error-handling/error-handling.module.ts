import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
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
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorHandlingModule { }
