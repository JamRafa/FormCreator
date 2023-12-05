import { Component } from '@angular/core';

interface Food {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-generic-question',
  templateUrl: './generic-question.component.html',
  styleUrls: ['./generic-question.component.scss'],
})
export class GenericQuestionComponent {
  selectedValue: string | undefined;

  foods: Food[] = [
    { value: 1, viewValue: 'Texto' },
    { value: 2, viewValue: 'Multipla escolha' },
    { value: 3, viewValue: 'certo e errado' },
    { value: 4, viewValue: 'Arquivo' },
  ];
}
