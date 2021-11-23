import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lux-gauge',
  templateUrl: './lux-gauge.component.html',
  styleUrls: ['./lux-gauge.component.css']
})
export class LuxGaugeComponent implements OnInit {
  
  colorScheme = {
    domain: ['#F28C38']
  };

  constructor() { 
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

}

export var single = [
  {
    "name": "Luminosity",
    "value": 85
  }
];