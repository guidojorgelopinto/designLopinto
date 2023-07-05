import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptCookiesComponent } from './accept-cookies.component';

describe('AcceptCookiesComponent', () => {
  let component: AcceptCookiesComponent;
  let fixture: ComponentFixture<AcceptCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptCookiesComponent]
    });
    fixture = TestBed.createComponent(AcceptCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
