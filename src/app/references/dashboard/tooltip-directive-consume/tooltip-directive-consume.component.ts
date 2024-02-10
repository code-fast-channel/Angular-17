import { Component } from '@angular/core';
import { TooltipDirective } from '../../../shared/directives/tooltip/tooltip.directive';
@Component({
  selector: 'app-tooltip-directive-consume',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './tooltip-directive-consume.component.html',
  styleUrl: './tooltip-directive-consume.component.scss'
})
export class TooltipDirectiveConsumeComponent {

}
