import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultipleCacheServiceService {
  private cache: { [key: string]: any } = {};

  get<T>(key: string): T | null {
    return this.cache.hasOwnProperty(key) ? this.cache[key] : null;
  }

  set<T>(key: string, data: T): void {
    this.cache[key] = data;
  }

  delete(key: string): void {
    delete this.cache[key];
  }

  clear(): void {
    this.cache = {};
  }
}
