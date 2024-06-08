import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftToRightComponent } from './left-to-right.component';

describe('LeftToRightComponent', () => {
  let component: LeftToRightComponent;
  let fixture: ComponentFixture<LeftToRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftToRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftToRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
