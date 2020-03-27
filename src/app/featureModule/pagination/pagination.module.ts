import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationChildComponent } from './pagination-child/pagination-child.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 
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
    NgxPaginationModule
  ]
})
export class PaginationModule { }
