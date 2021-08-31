import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdformComponent } from './updform.component';

describe('UpdformComponent', () => {
  let component: UpdformComponent;
  let fixture: ComponentFixture<UpdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
