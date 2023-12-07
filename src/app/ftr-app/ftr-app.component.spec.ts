import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrAppComponent } from './ftr-app.component';

describe('FtrAppComponent', () => {
  let component: FtrAppComponent;
  let fixture: ComponentFixture<FtrAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtrAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FtrAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
