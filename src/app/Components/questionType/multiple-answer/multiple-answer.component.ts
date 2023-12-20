import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionOption } from 'src/app/Interfaces/questions';

@Component({
  selector: 'app-multiple-answer',
  templateUrl: './multiple-answer.component.html',
  styleUrls: ['./multiple-answer.component.scss'],
})
export class MultipleAnswerComponent implements OnChanges {
  @Input() question!: string; // assuming 'question' is a string
  @Input() opcoes?: QuestionOption[]; // assuming 'resposta' is a string

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['opcoes']) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    const group: any = {};

    this.opcoes?.forEach((option) => {
      group[option.id] = [option.selecionada];
    });

    this.formGroup = this.formBuilder.group(group);
  }
}
