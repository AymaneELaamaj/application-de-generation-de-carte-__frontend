import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabriquetComponent } from './tabriquet.component';

describe('TabriquetComponent', () => {
  let component: TabriquetComponent;
  let fixture: ComponentFixture<TabriquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabriquetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabriquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
