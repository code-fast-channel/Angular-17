import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cdk-drag-drop',
  standalone: true,
  imports: [CommonModule,DragDropModule],
  templateUrl: './cdk-drag-drop.component.html',
  styleUrl: './cdk-drag-drop.component.scss'
})
export class CdkDragDropComponent {

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
  ];

  drop(event: CdkDragDrop<string[]> | any) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


  arrOfObj = [
    {
      name: 'test',
      id:0
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

  dropArrOfObj(event: CdkDragDrop<string[]> | any) {
    moveItemInArray(this.arrOfObj, event.previousIndex, event.currentIndex);
  }

}
