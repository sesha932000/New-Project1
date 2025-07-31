import { Component } from '@angular/core';
import { SidebarService } from 'src/app/features/temple/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isSidebarVisible = false;
  constructor(public sidebarService: SidebarService){
   

  }


  ngOnInit() {
  this.sidebarService.isSidebarOpen$.subscribe(visible => {
    this.isSidebarVisible = visible;
  });
}
activeMenu = 'English'; 

setActive(menu: string) {
  this.activeMenu = menu;
}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
