import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidiYahyaZairComponent } from './sidi-yahya-zair.component';

describe('SidiYahyaZairComponent', () => {
  let component: SidiYahyaZairComponent;
  let fixture: ComponentFixture<SidiYahyaZairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidiYahyaZairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidiYahyaZairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
