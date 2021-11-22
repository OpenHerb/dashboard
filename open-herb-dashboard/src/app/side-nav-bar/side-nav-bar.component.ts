import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: 'side-nav-bar.component.html',
  styleUrls: ['side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  showFiller:boolean;


  constructor() { 
    this.showFiller = false;
  }

  ngOnInit() {
  }



}
