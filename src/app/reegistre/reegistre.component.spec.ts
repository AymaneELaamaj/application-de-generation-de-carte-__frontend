import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReegistreComponent } from './reegistre.component';

describe('ReegistreComponent', () => {
  let component: ReegistreComponent;
  let fixture: ComponentFixture<ReegistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReegistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
