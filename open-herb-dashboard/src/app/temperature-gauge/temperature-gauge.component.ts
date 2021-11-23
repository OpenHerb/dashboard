import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-gauge',
  templateUrl: './temperature-gauge.component.html',
  styleUrls: ['./temperature-gauge.component.css']
})
export class TemperatureGaugeComponent implements OnInit {
  // single: Array<any>[];
  maxTemperature: number;
  minTemperature: number;
  legend: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#7aa3e5']
  };

  constructor() { 
    Object.assign(this, { single });
    this.maxTemperature = 40;
    this.minTemperature = 0;
  }

  public ngOnInit(): void {
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
    "name": "Temperature",
    "value": 40
  }
];