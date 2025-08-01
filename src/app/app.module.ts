import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "./core/core.module";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true
    }),
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
