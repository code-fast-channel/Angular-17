import { Component } from '@angular/core';
import { CurrencyFormatPipe } from '../currency.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule,CurrencyFormatPipe],
  providers: [],
  // declaration:[]
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent {

}
