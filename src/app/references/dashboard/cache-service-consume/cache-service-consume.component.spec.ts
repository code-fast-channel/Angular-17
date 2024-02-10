import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheServiceConsumeComponent } from './cache-service-consume.component';

describe('CacheServiceConsumeComponent', () => {
  let component: CacheServiceConsumeComponent;
  let fixture: ComponentFixture<CacheServiceConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheServiceConsumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CacheServiceConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
