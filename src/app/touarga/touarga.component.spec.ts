import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouargaComponent } from './touarga.component';

describe('TouargaComponent', () => {
  let component: TouargaComponent;
  let fixture: ComponentFixture<TouargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouargaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
