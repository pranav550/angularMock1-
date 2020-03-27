import { DashboardComponentComponent } from './core/dashboard-component/dashboard-component.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: 'dashboard',  pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'validation', loadChildren: () => import(`./featureModule/validation/validation.module`).then(m => m.ValidationModule) },
  { path: 'date-picker', loadChildren: () => import(`./featureModule/datepicker/datepicker.module`).then(m => m.DatepickerModule) },
  { path: 'timezone', loadChildren: () => import(`./featureModule/timezone/timezone.module`).then(m => m.TimezoneModule) },
  { path: 'async', loadChildren: () => import(`./featureModule/async/async.module`).then(m => m.AsyncModule) },
  { path: 'error', loadChildren: () => import(`./featureModule/error-handling/error-handling.module`).then(m => m.ErrorHandlingModule) },
  { path: 'image', loadChildren: () => import(`./featureModule/image-upload/image-upload.module`).then(m => m.ImageUploadModule) },
  { path: 'pdf', loadChildren: () => import(`./featureModule/pdf-upload/pdf-upload.module`).then(m => m.PdfUploadModule) },
  { path: 'pagination', loadChildren: () => import(`./featureModule/pagination/pagination.module`).then(m => m.PaginationModule) },
  {path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
