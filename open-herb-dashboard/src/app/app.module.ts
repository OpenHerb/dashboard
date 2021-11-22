import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
  } from '@angular/material';

import { SensorDataService } from './sensor-data.service';

import { AppComponent } from './app.component';
import { LuxGaugeComponent } from './lux-gauge/lux-gauge.component';
import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';
import { SoilHumidityGaugeComponent } from './soil-humidity-gauge/soil-humidity-gauge.component';
import { RelativeHumidityGaugeComponent } from './relative-humidity-gauge/relative-humidity-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    LuxGaugeComponent,
    TemperatureGaugeComponent,
    SoilHumidityGaugeComponent,
    RelativeHumidityGaugeComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [SensorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
