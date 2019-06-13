import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInfoComponent } from './Shared/menu-info/menu-info.component';
import { InfoAgenceComponent } from './Shared/info-agence/info-agence.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material/material.module';
import { ConfirmationMailComponent } from './modules/sign-up/confirmation-mail/confirmation-mail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DefaultpipePipe } from './pipes/defaultpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuInfoComponent,
    InfoAgenceComponent,
    NavbarComponent,
    FooterComponent,
    DefaultpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CarouselModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
