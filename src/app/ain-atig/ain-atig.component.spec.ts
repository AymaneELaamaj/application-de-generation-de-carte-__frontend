import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AinAtigComponent } from './ain-atig.component';

describe('AinAtigComponent', () => {
  let component: AinAtigComponent;
  let fixture: ComponentFixture<AinAtigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AinAtigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AinAtigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
