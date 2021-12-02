import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
  } from '@angular/material';
  import {MatGridListModule} from '@angular/material/grid-list';

import { SensorDataService } from './sensor-data.service';

// Project based component imports
import { AppComponent } from './app.component';
import { LuxGaugeComponent } from './lux-gauge/lux-gauge.component';
import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';
import { SoilHumidityGaugeComponent } from './soil-humidity-gauge/soil-humidity-gauge.component';
import { RelativeHumidityGaugeComponent } from './relative-humidity-gauge/relative-humidity-gauge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashBoardBaseComponent} from './dashboard-base/dashboard-base.component'
@NgModule({
  declarations: [
    AppComponent,
    LuxGaugeComponent,
    TemperatureGaugeComponent,
    SoilHumidityGaugeComponent,
    RelativeHumidityGaugeComponent,
    DashboardComponent,
    DashBoardBaseComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [SensorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
