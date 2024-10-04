import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipaliteDeTemaraComponent } from './municipalite-de-temara.component';

describe('MunicipaliteDeTemaraComponent', () => {
  let component: MunicipaliteDeTemaraComponent;
  let fixture: ComponentFixture<MunicipaliteDeTemaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MunicipaliteDeTemaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunicipaliteDeTemaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
