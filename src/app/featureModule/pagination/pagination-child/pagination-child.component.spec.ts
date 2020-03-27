import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationChildComponent } from './pagination-child.component';

describe('PaginationChildComponent', () => {
  let component: PaginationChildComponent;
  let fixture: ComponentFixture<PaginationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
