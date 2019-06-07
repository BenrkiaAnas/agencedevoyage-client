import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '' , redirectTo : 'home', pathMatch: 'full'},
  {path : 'home' , loadChildren: './modules/home/home.module#HomeModule'},
  {path : 'voyage-organise' , loadChildren: './modules/voyage-organise/voyage-organise.module#VoyageOrganiseModule'},
  {path : 'detail-voyage' , loadChildren: './modules/details-voyage/details-voyage.module#DetailsVoyageModule'},
  {path : 'reservation-voyage' , loadChildren: './modules/reservation/reservation.module#ReservationModule'},
  {path : 'sign-up' , loadChildren: './modules/sign-up/sign-up.module#SignUpModule'},
  {path : 'detail-voyage/:id' , loadChildren: './modules/details-voyage/details-voyage.module#DetailsVoyageModule'},
  {path : 'reservation-voyage/:id' , loadChildren: './modules/reservation/reservation.module#ReservationModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
