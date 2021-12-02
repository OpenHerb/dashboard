import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardBaseComponent } from './dashboard-base.component';

describe('DashBoardBaseComponent', () => {
  let component: DashBoardBaseComponent;
  let fixture: ComponentFixture<DashBoardBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
