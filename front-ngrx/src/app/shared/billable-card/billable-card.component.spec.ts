import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillableCardComponent } from './billable-card.component';

describe('BillableCardComponent', () => {
  let component: BillableCardComponent;
  let fixture: ComponentFixture<BillableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
