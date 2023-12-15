import { Component } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToasterComponent } from './shared/toaster/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ToasterComponent],
  providers: [
	{
		provide: LocationStrategy,
		useClass: HashLocationStrategy,
	},
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'References';
}


