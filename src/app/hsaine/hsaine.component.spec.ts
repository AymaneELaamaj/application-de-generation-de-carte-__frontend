import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsaineComponent } from './hsaine.component';

describe('HsaineComponent', () => {
  let component: HsaineComponent;
  let fixture: ComponentFixture<HsaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HsaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HsaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
