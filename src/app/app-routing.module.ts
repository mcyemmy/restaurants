import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './component/restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: 'list', component: RestaurantListComponent },
  { path: 'detail/:value', component: RestaurantDetailComponent },
  { path: '**', redirectTo: '/list' },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
