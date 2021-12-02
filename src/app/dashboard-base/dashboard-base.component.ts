import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSidenav } from '@angular/material';


import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'dashboard-base',
  templateUrl: 'dashboard-base.component.html',
  styleUrls: ['dashboard-base.component.css']
})
export class DashBoardBaseComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}
