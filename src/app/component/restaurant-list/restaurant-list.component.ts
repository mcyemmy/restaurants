import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../service/restaurant.service';
import { LocalStorageService } from '../../service/local-storage.service';
// import { CallApiOnceService } from '../../service/call-Api-Once.service';
import { RestaurantInfo } from '../../model/restaurant-info';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: RestaurantInfo[] = [];
  hidenElement: boolean;
  noData = false;
  breakpoint: number;
  private subscription: Subscription;

  constructor( 
    private resService: RestaurantService,
    private localStorageService: LocalStorageService,
    // private callApiOnceService: CallApiOnceService,
    private router: Router) { }

  ngOnInit() {
    this.getRestaurantData();
    this.breakpoint = (window.innerWidth < 415) ? 1 : 2;
  }

  onResize(event) {
    // Assign display column value to breakpoint based on viewport size
    this.breakpoint = (event.target.innerWidth < 415) ? 1 : 2;
  }

  getRestaurantData() {
    // Subscribe to restaurant data service
    this.subscription = this.resService.getRestaurants().subscribe( (res: RestaurantInfo[]) => {
      if (res) {
        this.restaurants = res['restaurants'];
      }
      else {
        this.noData = true;
      }
    }, error => {
      console.error(error);
      this.noData = true;
    })
  }

  gotToDetailsPage(event) {
    this.localStorageService.setApiData(this.restaurants);
    const path = event.replace(/\s/g, "-").toLowerCase();
    this.router.navigate(['/detail', path])
  }
  // this.callApiOnceService.passApiData(this.restaurants)

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
