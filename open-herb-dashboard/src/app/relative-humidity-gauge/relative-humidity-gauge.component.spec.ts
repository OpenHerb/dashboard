import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeHumidityGaugeComponent } from './relative-humidity-gauge.component';

describe('RelativeHumidityGaugeComponent', () => {
  let component: RelativeHumidityGaugeComponent;
  let fixture: ComponentFixture<RelativeHumidityGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeHumidityGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeHumidityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
