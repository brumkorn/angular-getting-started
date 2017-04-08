import "../../node_modules/bootstrap/dist/css/bootstrap.css";


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductModule } from "./products/product.module";
import { SharedModule } from "./shared/shared.module";


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
