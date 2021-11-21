import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxGaugeComponent } from './lux-gauge.component';

describe('LuxGaugeComponent', () => {
  let component: LuxGaugeComponent;
  let fixture: ComponentFixture<LuxGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
