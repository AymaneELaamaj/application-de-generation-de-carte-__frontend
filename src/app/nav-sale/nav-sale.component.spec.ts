import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSaleComponent } from './nav-sale.component';

describe('NavSaleComponent', () => {
  let component: NavSaleComponent;
  let fixture: ComponentFixture<NavSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
