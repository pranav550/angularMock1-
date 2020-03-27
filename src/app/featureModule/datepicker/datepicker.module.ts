import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapDatepickerComponent } from './bootstrap-datepicker/bootstrap-datepicker.component';
import { RouterModule, Routes } from  '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
const routes: Routes=[
  {path:'', children:[
    {path:'bootstap-datepicker', component: BootstrapDatepickerComponent},
    
  ]}
]


@NgModule({
  declarations: [BootstrapDatepickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDatepickerModule.forRoot(),
  ]
})
export class DatepickerModule { }
