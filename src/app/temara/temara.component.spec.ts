import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaraComponent } from './temara.component';

describe('TemaraComponent', () => {
  let component: TemaraComponent;
  let fixture: ComponentFixture<TemaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
