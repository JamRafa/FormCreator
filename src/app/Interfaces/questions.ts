export interface QuestionOption {
  id: string;
  texto: string;
  selecionada: boolean;
}

interface Question {
  id: number;
  tipo: string;
  pergunta: string;
  resposta: string;
  opcoes?: QuestionOption[];
}

export interface Questions {
  titulo: string;
  descricao: string;
  imagemCapa: string;
  perguntas: Question[];
}
