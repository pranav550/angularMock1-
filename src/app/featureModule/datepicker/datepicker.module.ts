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

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'

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
    MatNativeDateModule,
    SatDatepickerModule,
    
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerModule { }
