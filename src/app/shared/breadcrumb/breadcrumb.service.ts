// breadcrumb.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<{ breadcrumb: BreadcrumbItem[], title: string, type: string }>({ breadcrumb: [], title: '', type: ''});
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  updateBreadcrumb(data: { breadcrumb: BreadcrumbItem[], title: string, type: string }): void {
      this.breadcrumbSubject.next(data);
  }
}