import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDynamicRemoteComponent } from './lazy-dynamic-remote.component';

describe('LazyDynamicRemoteComponent', () => {
  let component: LazyDynamicRemoteComponent;
  let fixture: ComponentFixture<LazyDynamicRemoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyDynamicRemoteComponent]
    });
    fixture = TestBed.createComponent(LazyDynamicRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
