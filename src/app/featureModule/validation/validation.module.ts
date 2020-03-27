import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
const routes: Routes=[
  {path:'', children:[
    {path:'template', component: TemplateComponent},
    {path:'reactive', component: ReactiveComponent}
  ]}
]


@NgModule({
  declarations: [TemplateComponent, ReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ValidationModule { }
