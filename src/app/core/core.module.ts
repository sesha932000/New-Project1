import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main/main-section/main-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';



@NgModule({
 declarations: [HeaderComponent,  MainSectionComponent, FooterSectionComponent],
  exports: [HeaderComponent,MainSectionComponent,FooterSectionComponent],
  imports: [
    CommonModule,
    SharedModule,

    
    
]
})
export class CoreModule { }
