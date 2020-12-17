import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTariffModifierModalComponent } from './add-tariff-modifier-modal.component';

describe('AddTariffModifierModalComponent', () => {
  let component: AddTariffModifierModalComponent;
  let fixture: ComponentFixture<AddTariffModifierModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTariffModifierModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTariffModifierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
