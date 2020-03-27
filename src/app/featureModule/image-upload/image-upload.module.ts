import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
const routes: Routes=[
  {path:'', children:[
    {path:'image-upload', component: ImageComponent},
    
  ]}
]

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ImageUploadModule { }
