import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { forkJoin, Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.scss'
})
export class ForkJoinComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.errorHandleForkJoin();
  }

  errorHandleForkJoin(): void {
    const api1: Observable<any> = this.http.get('https://jsonplacehwolder.typicode.com/todos/1').pipe(
      catchError(error => {
        console.error('Error in API 1:', error);
        return of({ api: 'api1', error: error,isApiErrorOcuured: true }); // Rethrow the error with identification
      })
    );
    const api2: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      catchError(error => {
        console.error('Error in API 2:', error);
        return of({ api: 'api2', error: error, isApiErrorOcuured: true }); // Rethrow the error with identification
      })
    );

    forkJoin([api1, api2]).subscribe(
      ([result1, result2]) => {
        // Handle successful responses
        console.log('Result from API 1:', result1);
        console.log('Result from API 2:', result2);
      },
      error => {
        // not working
        console.error('Error in subscription:', error);
        // Handle error from forkJoin
        if (error.api === 'api1') {
          console.log('apissss 1',api1)
          // Handle error from API 1
        } else if (error.api === 'api2') {
          // Handle error from API 2
          console.log('api 2',api2)
        }
      }
    );
  }
  }

