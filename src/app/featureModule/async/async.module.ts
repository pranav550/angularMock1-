import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncCallComponent } from './async-call/async-call.component';
import { RouterModule, Routes } from '@angular/router';
import { AsyncCallChildComponent } from './async-call-child/async-call-child.component';
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
  ]
})
export class AsyncModule { }
