import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSpinnerComponent } from './multiple-spinner.component';

describe('MultipleSpinnerComponent', () => {
  let component: MultipleSpinnerComponent;
  let fixture: ComponentFixture<MultipleSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
