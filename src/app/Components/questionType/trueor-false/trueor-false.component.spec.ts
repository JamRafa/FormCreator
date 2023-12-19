import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueorFalseComponent } from './trueor-false.component';

describe('TrueorFalseComponent', () => {
  let component: TrueorFalseComponent;
  let fixture: ComponentFixture<TrueorFalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrueorFalseComponent]
    });
    fixture = TestBed.createComponent(TrueorFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
