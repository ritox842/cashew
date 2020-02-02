import { HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { deleteByRegex } from './deleteByRegex';
import { DefaultHttpCacheStorage, HttpCacheStorage } from './httpCacheStorage';
import { HTTP_CACHE_CONFIG, HttpCacheConfig } from './httpCacheConfig';

@Injectable()
export class HttpCacheLocalStorage implements HttpCacheStorage {
  private readonly cache = new DefaultHttpCacheStorage();
  private readonly storageKey: string;

  constructor(@Inject(HTTP_CACHE_CONFIG) private config: HttpCacheConfig) {
    this.storageKey = config.localStorageKey || 'httpCache';
  }

  has(key: string): boolean {
    return this.cache.has(key) || !!this.getLocalStorage()[key];
  }

  get(key: string): HttpResponse<any> {
    const cacheValue = this.cache.get(key);
    if (cacheValue) {
      return cacheValue;
    }

    const value = this.getLocalStorage()[key];
    if (value) {
      const response = new HttpResponse(value);
      this.cache.set(key, response);
    }

    return this.cache.get(key);
  }

  set(key: string, response: HttpResponse<any>): void {
    const storage = this.getLocalStorage();
    storage[key] = response;
    localStorage.setItem(this.storageKey, JSON.stringify(storage));
    this.cache.set(key, response);
  }

  delete(key?: string | RegExp): void {
    this.cache.delete(key);

    if (!key) {
      localStorage.removeItem(this.storageKey);
      return;
    }

    if (typeof key === 'string') {
      const storage = this.getLocalStorage();
      delete storage[key];
      localStorage.setItem(this.storageKey, JSON.stringify(storage));
      return;
    }

    const storage = this.getLocalStorage();
    deleteByRegex(key as RegExp, storage);
    localStorage.setItem(this.storageKey, JSON.stringify(storage));
  }

  private getLocalStorage(): Map<string, HttpResponse<any>> {
    const storageString = localStorage.getItem(this.storageKey) || '{}';
    return JSON.parse(storageString);
  }
}
