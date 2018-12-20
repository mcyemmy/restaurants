import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiOnceService } from '../../service/call-Api-Once.service';
import { RestaurantInfo } from '../../model/restaurant-info';
import { Subscription } from 'rxjs';
import { } from 'googlemaps';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  restaurants: RestaurantInfo[] = [];
  restaurantDetail: RestaurantInfo[] = [];
  address: string;
  formattedAddress: string;
  phone: string;
  name: string;
  category: string;
  twitter: string;
  noData = false;
  private subscription: Subscription;

  constructor(
    private callApiOnceService: CallApiOnceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getRestaurantData();
  }

  getRestaurantData() {
    // Receive restaurant data from restaurant listing component
    this.subscription = this.callApiOnceService.getApiData().subscribe( (res: RestaurantInfo[])  => {
      if (res) {
        this.restaurants = res;

        let restaurantName = this.activatedRoute.snapshot.params.value;
        restaurantName = restaurantName.replace(/-/g, " ").toLowerCase();
        this.restaurantDetail = this.restaurants.filter(item => (item.name).toLowerCase() === restaurantName);
        
        // Check for undefined before assigning value because some restaurants does not have the required value
        this.name = (this.restaurantDetail[0].name) ? this.restaurantDetail[0].name : '';
        this.category = (this.restaurantDetail[0].category) ? this.restaurantDetail[0].category : '';
        this.address = (this.restaurantDetail[0].location) ? this.restaurantDetail[0].location.address : '';
        this.formattedAddress = (this.restaurantDetail[0].location) ? this.restaurantDetail[0].location.formattedAddress[1] : '';
        this.phone = (this.restaurantDetail[0].contact) ? this.restaurantDetail[0].contact.formattedPhone : '';
        this.twitter = (this.restaurantDetail[0].contact) ? this.restaurantDetail[0].contact.twitter : '';
        this.loadMapData();
      }
      else {
        this.noData = true;
        this.router.navigate(['/list'])
      }
    }, error => {
      console.error(error);
      this.noData = true;
    })
  }

  loadMapData() {
    let mapProp = {
      center: new google.maps.LatLng(this.restaurantDetail[0].location.lat,
        this.restaurantDetail[0].location.lat),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const infowindow = new google.maps.InfoWindow({});
    let marker, i=0;
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.restaurantDetail[i].location.lat,
        this.restaurantDetail[i].location.lat),
        map: this.map
      });
  
      let restaurant = this.restaurantDetail[i];
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(restaurant.location.address + ' ' +
          restaurant.location.formattedAddress[1] + ' ' +
          restaurant.location.formattedAddress[2] );
          infowindow.open(this.map, marker);
        }
      })(marker, i));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
