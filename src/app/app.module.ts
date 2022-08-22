import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapMarkerComponent } from './map-marker/map-marker.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MapMarkerComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
