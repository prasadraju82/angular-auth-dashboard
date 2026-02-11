import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annualreports } from './annualreports';

describe('Annualreports', () => {
  let component: Annualreports;
  let fixture: ComponentFixture<Annualreports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annualreports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annualreports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
