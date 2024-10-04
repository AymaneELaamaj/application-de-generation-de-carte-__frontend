import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistreComponent } from './userregistre.component';

describe('UserregistreComponent', () => {
  let component: UserregistreComponent;
  let fixture: ComponentFixture<UserregistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserregistreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserregistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
