import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TABLE_CONFIG } from './configurable-table.constant'
@Component({
  selector: 'app-configurable-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configurable-table.component.html',
  styleUrl: './configurable-table.component.scss'
})
export class ConfigurableTableComponent {
  tableConfig:any = TABLE_CONFIG;
  items:any = [
    { name: 'Item 1', template: 'edit' },
    { name: 'Item 2', template: 'delete' },
    { name: 'Item 3', template: 'edit' },
    { name: 'Item 4', template: 'delete' }
  ];

  onEdit(item: any) {
    console.log('Edit', item);
  }

  onDelete(item: any) {
    console.log('Delete', item);
  }
}
