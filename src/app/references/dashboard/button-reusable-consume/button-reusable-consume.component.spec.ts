import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReusableConsumeComponent } from './button-reusable-consume.component';

describe('ButtonReusableConsumeComponent', () => {
  let component: ButtonReusableConsumeComponent;
  let fixture: ComponentFixture<ButtonReusableConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonReusableConsumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonReusableConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
