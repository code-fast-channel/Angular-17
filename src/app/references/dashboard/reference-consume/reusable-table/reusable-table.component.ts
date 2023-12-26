import { Component, OnInit } from '@angular/core';
import { CommonTableComponent } from '../../../../shared/component/common-table/common-table.component';
import { Custom, OverAllTable, TableWithCheckBox, TableWithCheckBoxAll, TableWithoutCheckbox } from './reusable-table.constant';
import { BreadcrumbService } from '../../../../shared/breadcrumb/breadcrumb.service';
import {BreadcrumbComponent} from '../../../../shared/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonTableComponent,BreadcrumbComponent],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.scss'
})
export class ReusableTableComponent implements OnInit {

  overAllHeadArray = OverAllTable;
  TableWithoutCheckbox:any = TableWithoutCheckbox;
  TableWithCheckBox:any = TableWithCheckBox;
  TableWithCheckBoxAll:any = TableWithCheckBoxAll;
  custom:any = Custom;
  usersList = [
    {
      name: 'apple',
      age: 2,
      date: Date.now()
    },
    {
      name: 'ball',
      age: 3,
      date: Date.now()
    },
    {
      name: 'cat',
      age: 5,
      checked: true,
      date: Date.now()
    }
  ]

  usersList1 = [
    {
      name: 'apple',
      age: 2,
    },
    {
      name: 'ball',
      age: 3
    },
    {
      name: 'cat',
      age: 5,
      checked: true
    }
  ]

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.updateBreadcrumb({
      breadcrumb: [{ name: 'Table', url: '/' }, { name: 'Dynamic bredcrumb', url: '/' }],
      title: 'Example Page',
      type: 'update'
    });
  }

  ngOnInit(): void {
  }


  buttonAction(e: any) {
    console.log('eeee', e)
    switch (e.key) {
      case 'Edit':
        console.log('edit', e)
        break;
      case 'Delete':
        console.log('delete', e)
        break;
      case 'checkBox':
        console.log('checkBox', e)
        break;
      case 'View':
        console.log('View', e)
        break;
      case 'View&Navigate':
        console.log('View&Navigate', e)
        break;
    }
  }

  open() {

    // to open 
    // const modalRef = this.modalService.open(QuickViewComponent,{
    //   windowClass: 'fade show',
    //   backdrop: 'static'
    // });
  }

  customClick(data: any,index: any) {
    console.log('data',data,index)
  }
  ngOnDestroy() {
    this.breadcrumbService.updateBreadcrumb({
      breadcrumb: [],
      title: '',
      type: 'reset'
    });
  }
}