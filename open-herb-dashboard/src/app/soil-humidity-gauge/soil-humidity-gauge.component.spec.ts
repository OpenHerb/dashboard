import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilHumidityGaugeComponent } from './soil-humidity-gauge.component';

describe('SoilHumidityGaugeComponent', () => {
  let component: SoilHumidityGaugeComponent;
  let fixture: ComponentFixture<SoilHumidityGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilHumidityGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilHumidityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
