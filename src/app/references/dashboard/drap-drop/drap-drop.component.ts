import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { totalFields } from './drag-drop.constant';
@Component({
  selector: 'app-drap-drop',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './drap-drop.component.html',
  styleUrl: './drap-drop.component.scss'
})
export class DrapDropComponent {
  fields: any = totalFields;
  draggedFields: any = [];
  selectedFields: any = totalFields;
}
