import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTestComponent } from './lazy-test.component';

describe('LazyTestComponent', () => {
  let component: LazyTestComponent;
  let fixture: ComponentFixture<LazyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyTestComponent]
    });
    fixture = TestBed.createComponent(LazyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
