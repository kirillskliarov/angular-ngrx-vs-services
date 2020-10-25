import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffModifierComponent } from './tariff-modifier.component';

describe('TariffModifierComponent', () => {
  let component: TariffModifierComponent;
  let fixture: ComponentFixture<TariffModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
