import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheServiceConsumeMultipleCallsComponent } from './cache-service-consume-multiple-calls.component';

describe('CacheServiceConsumeMultipleCallsComponent', () => {
  let component: CacheServiceConsumeMultipleCallsComponent;
  let fixture: ComponentFixture<CacheServiceConsumeMultipleCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheServiceConsumeMultipleCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CacheServiceConsumeMultipleCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
