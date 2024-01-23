import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag-and-drop-two-list',
  standalone: true,
  imports: [CommonModule,DragDropModule],
  templateUrl: './drag-and-drop-two-list.component.html',
  styleUrl: './drag-and-drop-two-list.component.scss'
})
export class DragAndDropTwoListComponent {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  arrOfObj1: any = [
    {
      name: 'test',
      id:0,
      disabled: true
    },
    {
      name: 'test1',
      id:1
    },
    {
      name: 'test2',
      id:2
    }
  ];


  arrOfObj2: any = [
    {
      name: 'test5',
      id:5
    },
    {
      name: 'test6',
      id:6
    },
    {
      name: 'test7',
      id:7
    }
  ];

  
  arrayOfObjectDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
