import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAppComponent } from './head-app.component';

describe('HeadAppComponent', () => {
  let component: HeadAppComponent;
  let fixture: ComponentFixture<HeadAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
