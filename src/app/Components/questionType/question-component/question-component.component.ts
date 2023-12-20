import { Component, Input } from '@angular/core';
import { QuestionOption } from 'src/app/Interfaces/questions';

interface Question {
  id: number;
  pergunta: string;
  tipo: string;
  resposta?: string;
  opcoes?: QuestionOption[]
};

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.scss']
})
export class QuestionComponentComponent {
  @Input() questionData!: Question;


}
