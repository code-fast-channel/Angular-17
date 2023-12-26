import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiIdComponent } from './upi-id.component';

describe('UpiIdComponent', () => {
  let component: UpiIdComponent;
  let fixture: ComponentFixture<UpiIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpiIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpiIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
