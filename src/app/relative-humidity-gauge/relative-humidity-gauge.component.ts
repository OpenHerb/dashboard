import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-relative-humidity-gauge',
  templateUrl: './relative-humidity-gauge.component.html',
  styleUrls: ['./relative-humidity-gauge.component.css']
})
export class RelativeHumidityGaugeComponent implements OnInit {
  single: Array<any>[];
  view: any[] = [500, 400];
  legend: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#00FF00']
  };

  constructor() { 
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}




export var single = [
  {
    "name": "Relative Humidity",
    "value": 89.4
  }
];
