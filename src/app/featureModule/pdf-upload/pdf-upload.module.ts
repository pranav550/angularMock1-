import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf/pdf.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes: Routes=[
  {path:'', children:[
    {path:'pdf-upload', component: PdfComponent},
    
  ]}
]

@NgModule({
  declarations: [PdfComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ]
})
export class PdfUploadModule { }
