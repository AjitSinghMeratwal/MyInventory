import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing } from './app-routing.module';
import { AppComponent } from './app.component';
import {MdcButtonModule,MdcIconModule ,MdcElevationModule,MdcRippleModule,MdcThemeModule,MdcTypographyModule,MdcLinearProgressModule,MdcCardModule} from '@angular-mdc/web';
import { MaterializeModule } from 'angular2-materialize';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {GetserviceService} from './Services/get-service.service';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { DialogService } from './Services/dialog.service';
import * as $ from 'jquery';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    routing,
    MdcButtonModule,
    MatCardModule,
    MdcElevationModule,
    MdcRippleModule,
    MdcThemeModule,
    MdcTypographyModule,
    MdcLinearProgressModule,
    MdcIconModule,
    MdcCardModule,
    MaterializeModule,
    HttpClientModule,
   AsyncLocalStorageModule,

  ],
  providers:  [GetserviceService,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
