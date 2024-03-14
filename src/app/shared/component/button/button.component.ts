import { Component, EventEmitter,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnClass: string = '';
  @Input() text: string = '';
  @Input() customstyle: any='';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    this.onBtnClick.emit();
  }

}
