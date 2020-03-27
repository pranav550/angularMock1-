import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { RouterModule, Routes } from '@angular/router';

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
  ]
})
export class ImageUploadModule { }
