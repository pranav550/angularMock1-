import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncCallComponent } from './async-call/async-call.component';
import { RouterModule, Routes } from '@angular/router';
import { AsyncCallChildComponent } from './async-call-child/async-call-child.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
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
    NgxSpinnerModule,
    MatGridListModule,
    MatSortModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AsyncModule { }
