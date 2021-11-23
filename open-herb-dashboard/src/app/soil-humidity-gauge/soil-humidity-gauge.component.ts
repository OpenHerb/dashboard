import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soil-humidity-gauge',
  templateUrl: './soil-humidity-gauge.component.html',
  styleUrls: ['./soil-humidity-gauge.component.css']
})
export class SoilHumidityGaugeComponent implements OnInit {

  colorScheme = {
    domain: ['#696969']
  };

  constructor() { 
    Object.assign(this, { single });

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
    "name": "Soil Humidity",
    "value": 45
  }
];