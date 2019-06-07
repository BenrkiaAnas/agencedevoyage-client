import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationVoyageComponent} from './reservation-voyage/reservation-voyage.component';

const routes: Routes = [
  {path: '', component: ReservationVoyageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
