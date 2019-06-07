import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingVoyageComponent } from './rating-voyage.component';

describe('RatingVoyageComponent', () => {
  let component: RatingVoyageComponent;
  let fixture: ComponentFixture<RatingVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
