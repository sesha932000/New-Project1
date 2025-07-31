import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SidebarSearchComponent,
    CheckboxComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    ButtonComponent,
    SidebarSearchComponent,
     CheckboxComponent,
     PaginationComponent
  ]
})
export class SharedModule { }
