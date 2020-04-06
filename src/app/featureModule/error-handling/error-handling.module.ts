import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
const routes: Routes=[
  {path:'', children:[
    {path:'error-handling', component: ErrorHandlingComponent},
    
  ]}
]

@NgModule({
  declarations: [ErrorHandlingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
export class ErrorHandlingModule { }
