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

export type IQuestions = {
  question: string;
  answers: string[];
  correct_answer: string;
};
