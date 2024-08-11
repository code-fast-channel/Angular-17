import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseFormFieldsComponent } from './reuse-form-fields.component';

describe('ReuseFormFieldsComponent', () => {
  let component: ReuseFormFieldsComponent;
  let fixture: ComponentFixture<ReuseFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseFormFieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReuseFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
