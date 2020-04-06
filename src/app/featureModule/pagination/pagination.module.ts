import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationChildComponent } from './pagination-child/pagination-child.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NgxSpinnerModule } from "ngx-spinner";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    NgxSpinnerModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationModule { }
