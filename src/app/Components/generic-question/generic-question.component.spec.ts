import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericQuestionComponent } from './generic-question.component';

describe('GenericQuestionComponent', () => {
  let component: GenericQuestionComponent;
  let fixture: ComponentFixture<GenericQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericQuestionComponent]
    });
    fixture = TestBed.createComponent(GenericQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
