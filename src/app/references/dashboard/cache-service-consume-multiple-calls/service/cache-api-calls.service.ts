import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MultipleCacheServiceService } from '../../../../shared/services/multiple-api-cache/multiple-cache-service.service';
@Injectable()
export class CacheApiCallsService {
  constructor(private http: HttpClient, private cacheService: MultipleCacheServiceService) {}

  fetchData(url: string, isRetrieveFromApi: boolean = false): Observable<any> {
    const cachedData = this.cacheService.get<any>(url);

    return (cachedData !== null && !isRetrieveFromApi)
      ? of(cachedData)
      : this.http.get(url).pipe(
          tap(data => this.cacheService.set(url, data)),
          catchError(error => {
            console.error('Error fetching data:', error);
            throw error;
          })
        );
  }

  fetchDataParticular(url: string, isRetrieveFromApi: boolean = false): Observable<any> {
    const cachedData = this.cacheService.get<any>(url);

    return (cachedData !== null && !isRetrieveFromApi)
      ? of(cachedData)
      : this.http.get(url).pipe(
          tap(data => this.cacheService.set(url, data)),
          catchError(error => {
            console.error('Error fetching data:', error);
            throw error;
          })
        );
  }
}
