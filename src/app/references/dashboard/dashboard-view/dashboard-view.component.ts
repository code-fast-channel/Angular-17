import { Component,OnInit, OnDestroy,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DashboardViewService } from './dashboard-view.service';
import { MultipleSearchPipe } from '../../../shared//pipes/multiple-search.pipe';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
  imports: [CommonModule,FormsModule,MultipleSearchPipe,HttpClientModule],
  providers: [DashboardViewService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardViewComponent implements OnInit, OnDestroy{
 // subscription
  private subscription: Subscription = new Subscription();
  //list
  loading = false;
  data: any = [];
  error: any;

  //filter
  searchTitle = '';
  searchUserId = '';
  filters: { key: any, value: any }[] = [
	{ key: 'name', value: this.searchTitle },
	{ key: 'area', value: this.searchUserId },
  ];

  constructor(private apiService: DashboardViewService, private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
	this.getList();
  }

  //filter
  updateFilter() {
    this.filters = [
		{ key: 'title', value: this.searchTitle },
		{ key: 'userId', value: this.searchUserId },
    ];
  }

  private getList(): void {
    this.updateSpinner('loading', true);
    this.subscription.add(
      this.apiService.getData().subscribe(
        (apiData) => {
          this.data = apiData;
          this.updateSpinner('loading', false);
          this.updateFilter();
          this.ref.markForCheck();
        },
        (error: any) => {
          this.error = error.message || 'An error occurred';
          this.updateSpinner('loading');
        },
        () => {
          this.updateSpinner('loading');
        }
      )
    );
  }

  private updateSpinner(property: any, value: boolean = false): void {
   if(this.hasOwnProperty(property as string)) {
     (this as any)[property] = value;
     this.ref.markForCheck();
   }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}