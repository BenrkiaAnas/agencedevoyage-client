import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationVoyageComponent } from './reservation-voyage.component';

describe('ReservationVoyageComponent', () => {
  let component: ReservationVoyageComponent;
  let fixture: ComponentFixture<ReservationVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
