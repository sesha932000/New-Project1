import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

   @Input() currentPage = 1;
  @Input() totalPages = 1;

  @Output() pageChange = new EventEmitter<number>();

 getPages(): (number | string)[] {
  const pages: (number | string)[] = [];
  const total = this.totalPages;
  const current = this.currentPage;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 4) {
      // Show first 3-4 pages, then dots, then last 3
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }
      pages.push('...');
      for (let i = total - 2; i <= total; i++) {
        pages.push(i);
      }
    } else if (current >= total - 3) {
      // Show first 3, then dots, then last pages
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }
      pages.push('...');
      for (let i = total - 2; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    }
  }

  return pages;
}

  goToPage(page: number | string): void {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  next(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

}
