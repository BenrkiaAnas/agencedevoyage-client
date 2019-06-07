import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsVoyageRoutingModule } from './details-voyage-routing.module';
import { DetailVoyageComponent } from './detail-voyage/detail-voyage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
      DetailVoyageComponent
  ],
  imports: [
    CommonModule,
    DetailsVoyageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
      CarouselModule,
      CarouselModule.forRoot(),
  ]
})
export class DetailsVoyageModule { }
