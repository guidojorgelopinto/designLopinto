import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizationComponent } from './optimization.component';

describe('OptimizationComponent', () => {
  let component: OptimizationComponent;
  let fixture: ComponentFixture<OptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptimizationComponent]
    });
    fixture = TestBed.createComponent(OptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
