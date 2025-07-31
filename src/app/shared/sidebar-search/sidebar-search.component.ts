import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/features/temple/services/sidebar.service';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.css']
})
export class SidebarSearchComponent implements OnInit {

  constructor(public sidebarService: SidebarService){
    
  }
  
locationOptions = [
  { id: 'maharashtra', label: 'Maharashtra', checked: false },
  { id: 'tamilnadu', label: 'Tamil Nadu', checked: false },
  { id: 'kerala', label: 'Kerala', checked: false },
  { id: 'delhi', label: 'New Delhi', checked: false },
  { id: 'gujarat', label: 'Gujarat', checked: false },
  { id: 'karnataka', label: 'Karnataka', checked: false },
  { id: 'rajasthan', label: 'Rajasthan', checked: false }
];

missionOptions = [
  { id: 'renovation', label: 'Renovation', checked: false },
  { id: 'healthcare', label: 'Healthcare', checked: false },
  { id: 'food', label: 'Food Offering', checked: false },
  { id: 'education', label: 'Education', checked: false },
  { id: 'shelter', label: 'Shelter', checked: false },
  { id: 'environment', label: 'Environment', checked: false }
];

deityOptions = [
  { id: 'krishna', label: 'Krishna', checked: false },
  { id: 'shiva', label: 'Shiva', checked: false },
  { id: 'ganesha', label: 'Ganesha', checked: false },
  { id: 'muruga', label: 'Muruga', checked: false },
  { id: 'ram', label: 'Ram', checked: false },
  { id: 'hanuman', label: 'Hanuman', checked: false }
];

  // Search state
  locationSearchTerm = '';
  missionSearchTerm = '';
  deitySearchTerm = '';
  showLocationSearchInput = false;
  showMissionSearchInput = false;
  showDeitySearchInput = false;
  filteredLocationOptions: FilterOption[] = [];
  filteredMissionOptions: FilterOption[] = [];
  filteredDeityOptions: FilterOption[] = [];
showAllLocations = false;
showAllMissions = false;
showAllDeities = false;
 isSidebarVisible = false;
ngOnInit() {
     this.sidebarService.isSidebarOpen$.subscribe((visible) => {
      this.isSidebarVisible = visible;
    });
  this.filteredLocationOptions = this.locationOptions.slice(0, 6);
  this.filteredMissionOptions = this.missionOptions.slice(0, 6);
  this.filteredDeityOptions = this.deityOptions.slice(0, 6);
}

  toggleLocationSearch() {
    this.showLocationSearchInput = !this.showLocationSearchInput;
    this.locationSearchTerm = '';
    this.filteredLocationOptions = [...this.locationOptions];
  }

  toggleMissionSearch() {
    this.showMissionSearchInput = !this.showMissionSearchInput;
    this.missionSearchTerm = '';
    this.filteredMissionOptions = [...this.missionOptions];
  }

  toggleDeitySearch() {
    this.showDeitySearchInput = !this.showDeitySearchInput;
    this.deitySearchTerm = '';
    this.filteredDeityOptions = [...this.deityOptions];
  }

 filterLocationOptions() {
  const term = this.locationSearchTerm.toLowerCase();
  this.filteredLocationOptions = this.locationOptions
    .filter(opt => opt.label.toLowerCase().includes(term))
    .slice(0, 6);
}

filterMissionOptions() {
  const term = this.missionSearchTerm.toLowerCase();
  this.filteredMissionOptions = this.missionOptions
    .filter(opt => opt.label.toLowerCase().includes(term))
    .slice(0, 6);
}

filterDeityOptions() {
  const term = this.deitySearchTerm.toLowerCase();
  this.filteredDeityOptions = this.deityOptions
    .filter(opt => opt.label.toLowerCase().includes(term))
    .slice(0, 6);
}

  showMoreLocations() {
    this.filteredLocationOptions = [...this.locationOptions];
  }

  showMoreMissions() {
    this.filteredMissionOptions = [...this.missionOptions];
  }

  showMoreDeities() {
    this.filteredDeityOptions = [...this.deityOptions];
  }





toggleMoreLocations() {
  this.showAllLocations = !this.showAllLocations;
}

toggleMoreMissions() {
  this.showAllMissions = !this.showAllMissions;
}

toggleMoreDeities() {
  this.showAllDeities = !this.showAllDeities;
}
}
