export enum ActionTypes {
  addSelectedAnswer = 'ADD_SELECTED_ANSWER',
  removeSelectedAnswer = 'REMOVE_SELECTED_ANSWER',
  resetSelectedAnswer = 'RESET_SELECTED_ANSWER',
}

export type ISelectedAnswer = {
  id: string;
  isCorrect: boolean;
};
