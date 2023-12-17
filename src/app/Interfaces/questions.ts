export interface Opcao {
  id: string;
  texto: string;
  selecionada: boolean;
}

export interface Pergunta {
  id: number;
  tipo: string;
  pergunta: string;
  opcoes?: Opcao[];
  resposta?: string;
  respostaCorreta?: string;
}

export interface Questions {
  titulo: string;
  descricao: string;
  imagemCapa: string;
  perguntas: Pergunta[];
}
