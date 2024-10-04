import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettanaComponent } from './bettana.component';

describe('BettanaComponent', () => {
  let component: BettanaComponent;
  let fixture: ComponentFixture<BettanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BettanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BettanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
