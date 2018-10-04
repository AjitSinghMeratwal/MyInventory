import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo:'app/login',pathMatch:'full'},
    { path: 'app/login', component:LoginComponent },
    { path: 'app/inventory',component:HomeComponent},
      { path: '**', redirectTo: 'app/login' },
    ];

export const routing = RouterModule.forRoot(appRoutes);
