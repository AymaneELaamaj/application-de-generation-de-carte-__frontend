import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaayaydaComponent } from './laayayda.component';

describe('LaayaydaComponent', () => {
  let component: LaayaydaComponent;
  let fixture: ComponentFixture<LaayaydaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaayaydaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaayaydaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
