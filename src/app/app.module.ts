import { PaginationModule } from './featureModule/pagination/pagination.module';
import { ErrorHandlingModule } from './featureModule/error-handling/error-handling.module';
import { PdfUploadModule } from './featureModule/pdf-upload/pdf-upload.module';
import { ImageUploadModule } from './featureModule/image-upload/image-upload.module';
import { TimezoneModule } from './featureModule/timezone/timezone.module';
import { AsyncModule } from './featureModule/async/async.module';
import { DatepickerModule } from './featureModule/datepicker/datepicker.module';
import { ValidationModule } from './featureModule/validation/validation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponentComponent } from './shared/components/dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ValidationModule,
    BrowserAnimationsModule,
    DatepickerModule,
    AsyncModule,
    TimezoneModule,
    ImageUploadModule,
    PdfUploadModule,
    ErrorHandlingModule,
    PaginationModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
