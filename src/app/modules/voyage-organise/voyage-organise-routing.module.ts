import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoyageOrganiseComponent} from './voyage-organise/voyage-organise.component';

const routes: Routes = [
  {
    path: '',
    component: VoyageOrganiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoyageOrganiseRoutingModule { }
