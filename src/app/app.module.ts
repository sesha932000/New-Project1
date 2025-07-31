import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
