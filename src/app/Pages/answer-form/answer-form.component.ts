import { Component } from '@angular/core';
import { Questions } from 'src/app/Interfaces/questions';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss'],
})
export class AnswerFormComponent {

  questions: Questions = {
    titulo: 'Prova de Ciências Naturais - 8º Ano',
    descricao:
      'Esta prova avalia o conhecimento dos alunos em ecossistemas e cadeias alimentares.',
    imagemCapa: './../../../assets/imagens/capa-ciencias.png',
    perguntas: [
      {
        id: 1,
        tipo: 'texto',
        pergunta: 'Explique o que é uma cadeia alimentar.',
        resposta: '',
      },
      {
        id: 2,
        tipo: 'certoErrado',
        pergunta: 'Os produtores são sempre plantas em um ecossistema.',
        opcoes: [
          { id: '2a', texto: 'Certo', selecionada: false },
          { id: '2b', texto: 'Errado', selecionada: false },
        ],
        resposta: '2b',
      },
      {
        id: 3,
        tipo: 'arquivo',
        pergunta:
          'Envie um desenho de uma cadeia alimentar que você observou em seu jardim ou parque local.',
        resposta: '',
      },
      {
        id: 4,
        tipo: 'multiplaEscolha',
        pergunta: 'Qual destes animais é um consumidor secundário?',
        opcoes: [
          { id: '4a', texto: 'Girafa', selecionada: false },
          { id: '4b', texto: 'Leão', selecionada: false },
          { id: '4c', texto: 'Coelho', selecionada: false },
          { id: '4d', texto: 'Alga', selecionada: false },
        ],
        resposta: '4b',
      },
    ],
  };
}
