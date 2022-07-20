import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestohomeComponent } from './restohome.component';

describe('RestohomeComponent', () => {
  let component: RestohomeComponent;
  let fixture: ComponentFixture<RestohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
