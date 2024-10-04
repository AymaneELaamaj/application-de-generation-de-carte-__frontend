import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkhiratComponent } from './skhirat.component';

describe('SkhiratComponent', () => {
  let component: SkhiratComponent;
  let fixture: ComponentFixture<SkhiratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkhiratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkhiratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
