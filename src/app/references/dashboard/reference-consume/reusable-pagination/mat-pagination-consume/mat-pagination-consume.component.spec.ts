import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginationConsumeComponent } from './mat-pagination-consume.component';

describe('MatPaginationConsumeComponent', () => {
  let component: MatPaginationConsumeComponent;
  let fixture: ComponentFixture<MatPaginationConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatPaginationConsumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatPaginationConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
