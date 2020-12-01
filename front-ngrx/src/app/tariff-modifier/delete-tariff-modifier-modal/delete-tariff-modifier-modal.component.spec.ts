import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTariffModifierModalComponent } from './delete-tariff-modifier-modal.component';

describe('DeleteTariffModifierModalComponent', () => {
  let component: DeleteTariffModifierModalComponent;
  let fixture: ComponentFixture<DeleteTariffModifierModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTariffModifierModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTariffModifierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
