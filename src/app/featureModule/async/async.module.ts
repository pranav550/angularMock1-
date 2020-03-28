import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncCallComponent } from './async-call/async-call.component';
import { RouterModule, Routes } from '@angular/router';
import { AsyncCallChildComponent } from './async-call-child/async-call-child.component';
import { NgxSpinnerModule } from "ngx-spinner";
const routes: Routes=[
  {path:'', children:[
    {path:'async-api-call', component: AsyncCallComponent},
    
  ]}
]


@NgModule({
  declarations: [AsyncCallComponent, AsyncCallChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AsyncModule { }
