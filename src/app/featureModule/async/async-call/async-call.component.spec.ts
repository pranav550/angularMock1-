import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCallComponent } from './async-call.component';

describe('AsyncCallComponent', () => {
  let component: AsyncCallComponent;
  let fixture: ComponentFixture<AsyncCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
