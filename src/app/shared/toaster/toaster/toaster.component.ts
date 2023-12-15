import { Component, OnInit } from '@angular/core';
import { toasterSymbol } from './toaster.constant';
import { ToastrService } from '../toaster.service';
import { CommonModule, } from '@angular/common';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent implements OnInit {
  showToast = false;
  toastrMsg = "";
  toastrType = "";
  toastrPosition = "";
  toasterSymbol: any = toasterSymbol;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
      this.toastr.status.subscribe((msg: string) => {
        this.toastrType = localStorage.getItem("toastrType") || "";
        this.toastrPosition = localStorage.getItem("toastrPosition") || "";
        if (msg === null) {
          this.showToast = false;
        } else {
          this.showToast = true;
          this.toastrMsg = msg;
        }
      })
  }

  closeToast() {
    this.showToast = false;
  }
}
