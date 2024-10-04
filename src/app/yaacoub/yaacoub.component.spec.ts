import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaacoubComponent } from './yaacoub.component';

describe('YaacoubComponent', () => {
  let component: YaacoubComponent;
  let fixture: ComponentFixture<YaacoubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YaacoubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YaacoubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
