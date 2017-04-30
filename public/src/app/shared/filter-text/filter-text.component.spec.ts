import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTextComponent } from './filter-text.component';

describe('FilterTextComponent', () => {
  let component: FilterTextComponent;
  let fixture: ComponentFixture<FilterTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
