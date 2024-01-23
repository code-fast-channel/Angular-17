import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: { [key: string]: Observable<any> } = {};

  constructor(private http: HttpClient) {}

  get<T>(url: string, isTriggerApi: boolean = false): Observable<T> {
    if (!this.cache[url] || isTriggerApi) {
      this.cache[url] = this.http.get<T>(url).pipe(
        tap(data => this.setCache(url, data)),
        catchError(error => {
          console.error('Error fetching data:', error);
          return of(null); // Return an observable with null in case of an error
        })
      );
    }

    return this.cache[url];
  }

  private setCache(key: string, data: any): void {
    this.cache[key] = of(data);
  }
}