import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaaleComponent } from './saale.component';

describe('SaaleComponent', () => {
  let component: SaaleComponent;
  let fixture: ComponentFixture<SaaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
