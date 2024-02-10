import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CacheService } from '../../../shared/services/cache-service/cache.service';
import { ButtonComponent } from '../../../shared/component/button/button.component';
@Component({
  selector: 'app-cache-service-consume',
  standalone: true,
  imports: [ButtonComponent,CommonModule,HttpClientModule],
  providers: [CacheService],
  templateUrl: './cache-service-consume.component.html',
  styleUrl: './cache-service-consume.component.scss'
})
export class CacheServiceConsumeComponent {
  data: any = [];

  constructor(private cacheService: CacheService) {}

  refreshData(isRefresh: boolean): void {
    // Trigger a new API call by setting isTriggerApi to true
    this.cacheService.get<any[]>('https://jsonplaceholder.typicode.com/todos', isRefresh).subscribe((arg: any) => {
      this.data = arg;
    });
    
  }

}
