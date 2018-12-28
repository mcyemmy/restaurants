import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants(): Observable<any> {
    return this.httpClient
    .get('//s3.amazonaws.com/br-codingexams/restaurants.json')
    .pipe(
      catchError( err => {
        return throwError(err);
      })
    );
  }
}
