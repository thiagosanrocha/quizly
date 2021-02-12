export type IApiQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type IApiResponse = {
  response_code: number;
  results: IApiQuestion[];
};

export type IQuestion = {
  question: string;
  answers: IAnswer[];
  correct_answer: string;
};

export type IAnswer = {
  id: string;
  text: string;
};
