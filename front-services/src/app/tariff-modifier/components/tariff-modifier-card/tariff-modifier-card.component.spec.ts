import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffModifierCardComponent } from './tariff-modifier-card.component';

describe('TariffModifierCardComponent', () => {
  let component: TariffModifierCardComponent;
  let fixture: ComponentFixture<TariffModifierCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffModifierCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffModifierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
