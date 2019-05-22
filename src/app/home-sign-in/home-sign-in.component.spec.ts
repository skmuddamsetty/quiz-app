import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSignInComponent } from './home-sign-in.component';

describe('HomeSignInComponent', () => {
  let component: HomeSignInComponent;
  let fixture: ComponentFixture<HomeSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
