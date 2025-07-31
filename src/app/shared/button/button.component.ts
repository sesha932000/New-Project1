import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 @Input() label: string = 'Click';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() width: string = '100px';
  @Input() height: string = '36px';
  @Input() rounded: string = '4px';

  @Input() bgColor: string = '#F7941D'; 
  @Input() textColor: string = '#FFFFFF';
  @Input() useGradient: boolean = true;

  @Input() borderClass: string = 'border border-border-gray';

}
