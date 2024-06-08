import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-to-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-to-right.component.html',
  styleUrl: './left-to-right.component.scss'
})
export class LeftToRightComponent implements OnInit{
  nameList: any = [
    {
      name: 'abc',
      id: 1
    },
    {
      name: 'jo',
      id: 2
    },
    {
      name: 'absd',
      id: 3
    },
    {
      name: 'erty',
      id: 4
    }
  ];
  selectedNameList: any = [];
  ngOnInit(): void {
    this.assignValue();
  }

  add(val: any) {
   let addedIndex = this.findIndex(this.nameList, 'id', val.id);
   if(addedIndex>=0) {
    this.nameList[addedIndex].isSelected = false;
    this.selectedNameList.push({...val});
   }
  }

  remove(val: any) {
    let addedIndex = this.findIndex(this.selectedNameList, 'id', val.id);
    let nameInd = this.findIndex(this.nameList, 'id', val.id);
    if(addedIndex>=0) {
     this.nameList[nameInd].isSelected = true;
     this.selectedNameList.splice(addedIndex,1);
    }
  }

  private assignValue() {
    this.nameList.forEach((element: any) => {
      element.isSelected = true;
    });
  }

  private findIndex(arr: any, key: any , value: any): any {
    return arr.findIndex((val: any) => val[key] === value);
  }
}
