import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneChangeComponent } from './timezone-change/timezone-change.component';
import { RouterModule, Routes } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
const routes: Routes=[
  {path:'', children:[
    {path:'timezone-change', component: TimezoneChangeComponent},
    
  ]}
]

@NgModule({
  declarations: [TimezoneChangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ]
})
export class TimezoneModule { }
