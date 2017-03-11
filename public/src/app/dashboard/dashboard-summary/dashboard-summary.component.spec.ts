import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSummaryComponent } from './dashboard-summary.component';

describe('DashboardSummaryComponent', () => {
  let component: DashboardSummaryComponent;
  let fixture: ComponentFixture<DashboardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
