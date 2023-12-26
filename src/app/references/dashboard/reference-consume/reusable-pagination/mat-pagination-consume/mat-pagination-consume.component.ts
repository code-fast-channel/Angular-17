import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import { MatPaginationComponent } from '../../../../../shared/component/common-paginations/mat-pagination/mat-pagination.component';
@Component({
  selector: 'app-mat-pagination-consume',
  standalone: true,
  imports: [CommonModule,HttpClientModule,MatPaginationComponent,],
  templateUrl: './mat-pagination-consume.component.html',
  styleUrl: './mat-pagination-consume.component.scss'
})
export class MatPaginationConsumeComponent {
  currentPage = 1; //page number
  pageSize = 5; // limit
  offset = 0;  // offset
  totalItems = 300; // items count
  items: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {}

  ngOnInit(): void {
    this.routeSubscribe();
    this.loadData();
  }

  loadData(): void {
    this.offset = (this.currentPage - 1) * this.pageSize;
    this.getItems(this.offset, this.pageSize).subscribe((response: any) => {
      this.items = response;
      // this.totalItems = response.total;
    });
    this.updateQueryParam();
    console.log('current page',this.currentPage,this.pageSize,this.offset)
  }

  onPageChange(event: { offset: number; limit: number }): void {
    this.pageSize = event.limit;
    this.currentPage = Math.floor(event.offset / event.limit) + 1;
    this.loadData();
  }

  routeSubscribe() {
    let paramsValue:any={};
    this.route.queryParams.subscribe(params => {
      paramsValue=params
      this.pageSize = Number(paramsValue.limit) || 10;
      this.offset = Number(paramsValue.offset) || 0;
      this.currentPage = Number(paramsValue.currentPage) || 1;
      // console.log('params',params,JSON.parse(JSON.stringify(params)),this.limit,this.currentPage,this.offset)
    });
    this.loadData();
  
  }

  private updateQueryParam(): void {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      currentPage: this.currentPage
    }
    this.router.navigate([], { queryParams: params, queryParamsHandling: 'merge' });
  }

  getItems(offset: number, limit: number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`;
    return this.http.get<any>(url);
  }
}
