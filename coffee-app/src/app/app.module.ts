import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomemadeComponent } from './homemade/homemade.component';
import { FooterComponent } from './footer/footer.component';
import { BeansComponent } from './beans/beans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomemadeComponent,
    FooterComponent,
    BeansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeansComponent } from './beans/beans.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomemadeComponent } from './homemade/homemade.component';

@NgModule({
  declarations: [
    AppComponent,
    BeansComponent,
    NavComponent,
    FooterComponent,
    HomemadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }