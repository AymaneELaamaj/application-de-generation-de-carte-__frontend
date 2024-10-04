import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTemaraComponent } from './nav-temara.component';

describe('NavTemaraComponent', () => {
  let component: NavTemaraComponent;
  let fixture: ComponentFixture<NavTemaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavTemaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavTemaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
