import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setApiData(restaurants) {
    return window.localStorage.setItem('restaurants', JSON.stringify(restaurants));
  }

  getApiData() {
    const restaurantDetails = window.localStorage.getItem('restaurants');
    if (restaurantDetails) {
      return JSON.parse(restaurantDetails);
    }
    return null
  }
}
