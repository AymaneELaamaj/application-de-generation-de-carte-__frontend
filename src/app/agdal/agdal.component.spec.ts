import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgdalComponent } from './agdal.component';

describe('AgdalComponent', () => {
  let component: AgdalComponent;
  let fixture: ComponentFixture<AgdalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgdalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgdalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
