import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabMrissaComponent } from './bab-mrissa.component';

describe('BabMrissaComponent', () => {
  let component: BabMrissaComponent;
  let fixture: ComponentFixture<BabMrissaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabMrissaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BabMrissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
