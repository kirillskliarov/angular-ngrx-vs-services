import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTariffModifierCardComponent } from './user-tariff-modifier-card.component';

describe('UserTariffModifierCardComponent', () => {
  let component: UserTariffModifierCardComponent;
  let fixture: ComponentFixture<UserTariffModifierCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTariffModifierCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTariffModifierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
