import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationChildComponent } from './pagination-child/pagination-child.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NgxSpinnerModule } from "ngx-spinner";
const routes: Routes=[
  {path:'', children:[
    {path:'paginationCall', component: PaginationComponent},
    
  ]}
]

@NgModule({
  declarations: [PaginationComponent, PaginationChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationModule { }
