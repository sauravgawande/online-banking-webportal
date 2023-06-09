import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProblemComponent } from './add-problem.component';

describe('AddProblemComponent', () => {
  let component: AddProblemComponent;
  let fixture: ComponentFixture<AddProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
