import { Component, Input } from '@angular/core';
import { Temple, TempleService } from 'src/app/features/temple/services/temple.service';



@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {

  constructor(private templeService:TempleService ){}
   currentPage = 1;
  totalPages = 1;
  promotedTemple?: Temple;
  otherTemples: Temple[] = [];
  combinedTemples: Temple[] = [];

  private intervalId: any;
 xsTemple!: Temple;
  ngOnInit(): void {
    this.templeService.getTemples().subscribe((temples) => {
      this.promotedTemple = temples.find(t => t.promoted);
      this.otherTemples = temples.filter(t => !t.promoted);
      this.combinedTemples = this.promotedTemple
        ? [this.promotedTemple, ...this.otherTemples]
        : [...this.otherTemples];
      this.totalPages = this.combinedTemples.length;
const temple = this.templeService.getTempleById('1');
    if (temple) {
      this.xsTemple = temple;
    } else {
      console.warn('Temple with ID 1 not found.');
    }
      this.startAutoSlide();
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.currentPage = this.currentPage === this.totalPages ? 1 : this.currentPage + 1;
    }, 4000); 
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}