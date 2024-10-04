import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoussoufiaComponent } from './youssoufia.component';

describe('YoussoufiaComponent', () => {
  let component: YoussoufiaComponent;
  let fixture: ComponentFixture<YoussoufiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoussoufiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoussoufiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
