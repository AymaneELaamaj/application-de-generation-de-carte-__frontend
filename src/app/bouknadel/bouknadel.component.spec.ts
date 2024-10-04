import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouknadelComponent } from './bouknadel.component';

describe('BouknadelComponent', () => {
  let component: BouknadelComponent;
  let fixture: ComponentFixture<BouknadelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BouknadelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BouknadelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
