import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CallApiOnceService {

  constructor() { }
  private state$ = new BehaviorSubject<any>('');

  passApiData(restaurantDetails) {
      this.state$.next(restaurantDetails);
  }

  getApiData() {
      return this.state$.asObservable();
  }
}
