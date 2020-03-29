import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapDatepickerComponent } from './bootstrap-datepicker/bootstrap-datepicker.component';
import { RouterModule, Routes } from  '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
const routes: Routes=[
  {path:'', children:[
    {path:'bootstap-datepicker', component: BootstrapDatepickerComponent},
    {path:'material-datepicker', component: MaterialDatepickerComponent},
    
  ]}
]


@NgModule({
  declarations: [BootstrapDatepickerComponent, MaterialDatepickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDatepickerModule.forRoot(),
    MatDatepickerModule, MatInputModule,
    
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class DatepickerModule { }
