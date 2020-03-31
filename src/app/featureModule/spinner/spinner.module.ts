import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleSpinnerComponent } from './multiple-spinner/multiple-spinner.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { IsSpinnerDirective } from 'src/app/shared/directive/is-spinner.directive';
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
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpinnerModule { }
