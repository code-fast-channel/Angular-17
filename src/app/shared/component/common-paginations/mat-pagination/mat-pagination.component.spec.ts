import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginationComponent } from './mat-pagination.component';

describe('MatPaginationComponent', () => {
  let component: MatPaginationComponent;
  let fixture: ComponentFixture<MatPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
