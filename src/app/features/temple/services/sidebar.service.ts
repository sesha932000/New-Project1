import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }


  private isSidebarOpenSubject = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();

  toggleSidebar() {
    const current = this.isSidebarOpenSubject.value;
    this.isSidebarOpenSubject.next(!current);
  }

  closeSidebar() {
    this.isSidebarOpenSubject.next(false);
  }

  openSidebar() {
    this.isSidebarOpenSubject.next(true);
  }

  isSidebarOpen(): boolean {
    return this.isSidebarOpenSubject.value;
  }
}
