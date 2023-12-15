import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.scss'
})
export class CommonTableComponent implements OnInit {

  isSelectAll = false;
  dynamicFieldDivShow = false;  


  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Input() dynamicFieldShowHide = false;
  @Input() customTemplate?:any = {};
  @Output() buttonChangeEvent = new EventEmitter<any>();
  customDateFormat = 'dd/MM/yyyy hh:mm a'
  constructor(
    ) {}

  ngOnInit(): void {
    this.isEnableCheckBox();
  }

  buttonChange(key: any, item: any) {
    item.key = key;
    this.buttonChangeEvent.emit(item);
  }

  checkBoxEvent(type?: any) {
    if (type === 'selectAll') {
      this.GridArray.forEach((element: any) => element.checked = this.isSelectAll);
    }
    let selectedDatasList: any = [...this.GridArray].filter((val: any) => val.checked);
    this.isSelectAll = this.GridArray.every((val: any) => val.checked);
    const val = {
      key: 'checkBox',
      selectedDatas: [...selectedDatasList],
    };
    this.buttonChangeEvent.emit(val);
  }

  private isEnableCheckBox() {
    const isExist = this.HeadArray.findIndex(
      (val: any) => val.type === 'checkBox'
    );
    if (isExist >= 0) {
      this.GridArray.forEach((element: any) => {
        element.checked = element.checked ?? false;
      });
      this.checkBoxEvent();
    }
  }

}