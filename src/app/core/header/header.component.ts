import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SidebarService } from 'src/app/features/temple/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isSidebarVisible = false;
  constructor(public sidebarService: SidebarService,private toastr: ToastrService){
   

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

   showSuccess() {
    console.log('showSuccess called!');
    this.toastr.success('Thank you for your donation!', 'Success');
  }
}
