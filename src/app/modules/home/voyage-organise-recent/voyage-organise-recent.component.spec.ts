import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageOrganiseRecentComponent } from './voyage-organise-recent.component';

describe('VoyageOrganiseRecentComponent', () => {
  let component: VoyageOrganiseRecentComponent;
  let fixture: ComponentFixture<VoyageOrganiseRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageOrganiseRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageOrganiseRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
