import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fadeInOut, INavbarData } from './helper';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  @if (collapsed && data.items && data.items.length > 0) {
    <ul
    [@submenu]="expanded
      ? {value: 'visible', 
          params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
      : {value: 'hidden', 
          params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
      class="sublevel-nav"
    >
    @for (item of data.items; track item.label; let i = $index) {
      <li class="sublevel-nav-item">
      @if (item.items && item.items.length > 0) {
          <a class="sublevel-nav-link"
          (click)="handleClick(item)"
            [ngClass]="getActiveClass(item)"
          >
            <i class="sublevel-link-icon fa fa-circle"></i>
            @if (collapsed) {
            <span class="sublevel-link-text" @fadeInOut 
                >{{item.label}}</span>
            }
            @if (item.items && collapsed) {
            <i class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
            ></i>
            }
          </a>
      }
      @if (!item.items || (item.items && item.items.length === 0)) {
          <a class="sublevel-nav-link"
            [routerLink]="[item.routeLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <i class="sublevel-link-icon fa fa-circle"></i>
            @if (collapsed) {
            <span class="sublevel-link-text" @fadeInOut 
              >{{item.label}}</span>
            }
          </a>
      }
      @if (item.items && item.items.length > 0) {
          <div>
            <app-sublevel-menu
              [data]="item"
              [collapsed]="collapsed"
              [multiple]="multiple"
              [expanded]="item.expanded"
            ></app-sublevel-menu>
          </div>
      }
      </li>
    }
    </ul>
  }
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}), 
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for(let modelItem of this.data.items) {
          if (item !==modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routeLink) 
      ? 'active-sublevel' 
      : '';
  }

}
