import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAgenceComponent } from './info-agence.component';

describe('InfoAgenceComponent', () => {
  let component: InfoAgenceComponent;
  let fixture: ComponentFixture<InfoAgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
