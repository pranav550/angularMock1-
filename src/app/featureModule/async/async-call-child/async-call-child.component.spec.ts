import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCallChildComponent } from './async-call-child.component';

describe('AsyncCallChildComponent', () => {
  let component: AsyncCallChildComponent;
  let fixture: ComponentFixture<AsyncCallChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncCallChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCallChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
