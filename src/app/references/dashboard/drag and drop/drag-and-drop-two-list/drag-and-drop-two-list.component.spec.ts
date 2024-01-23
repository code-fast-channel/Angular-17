import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropTwoListComponent } from './drag-and-drop-two-list.component';

describe('DragAndDropTwoListComponent', () => {
  let component: DragAndDropTwoListComponent;
  let fixture: ComponentFixture<DragAndDropTwoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropTwoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAndDropTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
