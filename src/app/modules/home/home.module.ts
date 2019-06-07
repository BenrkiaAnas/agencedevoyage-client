import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CategoryComponent } from './category/category.component';
import { VoyageOrganiseRecentComponent } from './voyage-organise-recent/voyage-organise-recent.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [CategoryComponent, VoyageOrganiseRecentComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
    entryComponents: [HeaderComponent]
})
export class HomeModule { }