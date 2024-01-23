import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { MultipleCacheServiceService } from '../../../shared/services/multiple-api-cache/multiple-cache-service.service';
import { CacheApiCallsService } from './service/cache-api-calls.service';
import { ButtonComponent } from '../../../shared/component/button/button.component';
@Component({
  selector: 'app-cache-service-consume-multiple-calls',
  standalone: true,
  imports: [ButtonComponent,CommonModule,HttpClientModule],
  providers: [MultipleCacheServiceService,CacheApiCallsService],
  templateUrl: './cache-service-consume-multiple-calls.component.html',
  styleUrl: './cache-service-consume-multiple-calls.component.scss'
})
export class CacheServiceConsumeMultipleCallsComponent {
  data: any = [];
  detail: any = {};

  constructor(private cacheApiService: CacheApiCallsService) {}

  refreshData(isRefresh: boolean): void {
    this.data = [];
    // Trigger a new API call by setting isTriggerApi to true
    this.cacheApiService.fetchData('https://jsonplaceholder.typicode.com/todos', isRefresh).subscribe((arg: any) => {
      this.data = arg;
    });
    
  }

  refreshDataDetail(isRefresh: boolean): void {
    this.detail = {};
    // Trigger a new API call by setting isTriggerApi to true
    this.cacheApiService.fetchDataParticular('https://jsonplaceholder.typicode.com/todos/1', isRefresh).subscribe((arg: any) => {
      this.detail = arg;
    });
    
  }
}
