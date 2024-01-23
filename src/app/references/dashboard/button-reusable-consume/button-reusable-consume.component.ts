import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button-reusable-consume',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-reusable-consume.component.html',
  styleUrl: './button-reusable-consume.component.scss'
})
export class ButtonReusableConsumeComponent {

  click() {
    console.log('button clicked');
  }

}
