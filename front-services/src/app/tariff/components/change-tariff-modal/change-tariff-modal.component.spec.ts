import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTariffModalComponent } from './change-tariff-modal.component';

describe('ChangeTariffModalComponent', () => {
  let component: ChangeTariffModalComponent;
  let fixture: ComponentFixture<ChangeTariffModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTariffModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTariffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
