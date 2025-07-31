import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
 template: `
    <div class="flex items-center">
      <input
        type="checkbox"
        [id]="id"
        [checked]="checked"
        (change)="onChange($event)"
        class="rounded text-blue-500 mr-2 h-4 w-4"
      />
      <label [for]="id" class="text-gray-700">{{ label }}</label>
    </div>
  `,
  styles: [
  ]
})
export class CheckboxComponent {
   @Input() id!: string;
  @Input() label!: string;
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.checked = isChecked;
    this.checkedChange.emit(isChecked);
  }

}
