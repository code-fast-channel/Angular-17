import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormConsumeComponent } from './common-form-consume.component';

describe('CommonFormConsumeComponent', () => {
  let component: CommonFormConsumeComponent;
  let fixture: ComponentFixture<CommonFormConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonFormConsumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonFormConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
