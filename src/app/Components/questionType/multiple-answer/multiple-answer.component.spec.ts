import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAnswerComponent } from './multiple-answer.component';

describe('MultipleAnswerComponent', () => {
  let component: MultipleAnswerComponent;
  let fixture: ComponentFixture<MultipleAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleAnswerComponent]
    });
    fixture = TestBed.createComponent(MultipleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
