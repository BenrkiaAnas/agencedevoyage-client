import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMailComponent } from './confirmation-mail.component';

describe('ConfirmationMailComponent', () => {
  let component: ConfirmationMailComponent;
  let fixture: ComponentFixture<ConfirmationMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
