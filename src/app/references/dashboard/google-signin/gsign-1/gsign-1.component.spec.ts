import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gsign1Component } from './gsign-1.component';

describe('Gsign1Component', () => {
  let component: Gsign1Component;
  let fixture: ComponentFixture<Gsign1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gsign1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gsign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
