import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseClientsComponent } from './database-clients.component';

describe('DatabaseClientsComponent', () => {
  let component: DatabaseClientsComponent;
  let fixture: ComponentFixture<DatabaseClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
