import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOneComponent } from './router-one.component';

describe('RouterOneComponent', () => {
  let component: RouterOneComponent;
  let fixture: ComponentFixture<RouterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
