import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailVoyageComponent} from './detail-voyage/detail-voyage.component';

const routes: Routes = [
  {path: '', component: DetailVoyageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsVoyageRoutingModule { }
