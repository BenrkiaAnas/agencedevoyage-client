import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVoyageOrganiseComponent } from './search-voyage-organise.component';

describe('SearchVoyageOrganiseComponent', () => {
  let component: SearchVoyageOrganiseComponent;
  let fixture: ComponentFixture<SearchVoyageOrganiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVoyageOrganiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVoyageOrganiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
