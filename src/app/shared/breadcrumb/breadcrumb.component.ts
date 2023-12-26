// import { Component, OnInit } from '@angular/core';
// import { BreadcrumbService, BreadcrumbItem } from './breadcrumb.service';
// import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { filter, map, mergeMap } from 'rxjs/operators';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-breadcrumb',
//   standalone: true,
//   imports: [CommonModule,RouterModule],
//   templateUrl: './breadcrumb.component.html',
//   styleUrl: './breadcrumb.component.scss',
// })
// export class BreadcrumbComponent implements OnInit {
//   public pageInfo: any;

//   constructor(
//     private router: Router,
//     private activatedRoute: ActivatedRoute,
//     private title: Title
//   ) {}

//   ngOnInit() {
//     this.updateBreadcrumb(this.activatedRoute);
//     this.router.events
//       .pipe(filter((event:any) => event instanceof NavigationEnd))
//       .subscribe(() => {
//         this.updateBreadcrumb(this.activatedRoute);
//       });
//   }

//   private updateBreadcrumb(route: ActivatedRoute): void {
//     const lastRoute = this.getLastChild(route);

//     if (lastRoute) {
//       const data = lastRoute.snapshot.data;
//       if (data) {
//         this.title.setTitle(data.title);
//         this.pageInfo = data.breadcrumb;
//       }
//     }
//   }

//   private getLastChild(route: ActivatedRoute): any {
//     let lastChild = route;
//     while (lastChild.firstChild) {
//       lastChild = lastChild.firstChild;
//     }
//     return lastChild;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { BreadcrumbService, BreadcrumbItem } from './breadcrumb.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  public pageInfo: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    // Initial breadcrumb setup
    this.updateBreadcrumb(this.activatedRoute);

    // Subscribe to router events for dynamic updates
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb(this.activatedRoute);
      });

    // Subscribe to breadcrumb changes from the service
    this.breadcrumbService.breadcrumb$.subscribe((breadcrumbInfo) => {
      if (breadcrumbInfo?.type == 'update') {
        this.updateBreadcrumbInfo(breadcrumbInfo);
      } else if(breadcrumbInfo?.type === 'reset') {
        this.title.setTitle('');
        this.pageInfo = [];
        this.breadcrumbService.updateBreadcrumb(null as any)
      }
    });
  }

  private updateBreadcrumb(route: ActivatedRoute): void {
    const lastRoute = this.getLastChild(route);

    if (lastRoute) {
      const data = lastRoute.snapshot.data;
      console.log('data breadcrumb',data)
      if (data) {
        this.title.setTitle(data.title);
        this.pageInfo = data.breadcrumb;
      }
    }
  }

  private getLastChild(route: ActivatedRoute): any {
    let lastChild = route;
    while (lastChild.firstChild) {
      lastChild = lastChild.firstChild;
    }
    return lastChild;
  }

  private updateBreadcrumbInfo(breadcrumbInfo: any): void {
    this.title.setTitle(breadcrumbInfo.title);
    this.pageInfo = breadcrumbInfo.breadcrumb;
  }
}
