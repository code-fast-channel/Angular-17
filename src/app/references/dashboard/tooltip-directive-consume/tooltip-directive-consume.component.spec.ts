import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDirectiveConsumeComponent } from './tooltip-directive-consume.component';

describe('TooltipDirectiveConsumeComponent', () => {
  let component: TooltipDirectiveConsumeComponent;
  let fixture: ComponentFixture<TooltipDirectiveConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipDirectiveConsumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipDirectiveConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
