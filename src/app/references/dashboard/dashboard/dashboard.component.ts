import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { PermissionsDirective } from '@shared/directives/permissions.directive';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, BreadcrumbComponent,RouterModule,PermissionsDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit  {
  posts: any[] = [];

  constructor(private http: HttpClient)  {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
