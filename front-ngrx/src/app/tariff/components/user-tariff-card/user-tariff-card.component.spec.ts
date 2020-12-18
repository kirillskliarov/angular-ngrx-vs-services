import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTariffCardComponent } from './user-tariff-card.component';

describe('UserTariffCardComponent', () => {
  let component: UserTariffCardComponent;
  let fixture: ComponentFixture<UserTariffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTariffCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTariffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
