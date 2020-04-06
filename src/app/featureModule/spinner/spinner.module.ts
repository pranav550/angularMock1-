import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleSpinnerComponent } from './multiple-spinner/multiple-spinner.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { IsSpinnerDirective } from 'src/app/shared/directive/is-spinner.directive';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
const routes: Routes=[
  {path:'', children:[
    {path:'multiple-spinner', component: MultipleSpinnerComponent},
    
  ]}
]

@NgModule({
  declarations: [MultipleSpinnerComponent, IsSpinnerDirective],
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
export class SpinnerModule { }
