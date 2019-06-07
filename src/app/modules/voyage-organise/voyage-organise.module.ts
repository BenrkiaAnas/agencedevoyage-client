import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoyageOrganiseRoutingModule } from './voyage-organise-routing.module';
import { RatingVoyageComponent } from './rating-voyage/rating-voyage.component';
import { VoyageOrganiseComponent } from './voyage-organise/voyage-organise.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchVoyageOrganiseComponent } from './search-voyage-organise/search-voyage-organise.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [RatingVoyageComponent, VoyageOrganiseComponent, SearchFormComponent, SearchVoyageOrganiseComponent],
  imports: [
    CommonModule,
    VoyageOrganiseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    NgbModule,
    NgbModule.forRoot(),
    CarouselModule,
      CarouselModule.forRoot(),
  ]
})
export class VoyageOrganiseModule { }
