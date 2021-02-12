import { ActionTypes, ISelectedAnswer } from './types';

export function addSelectedAnswer({ id, isCorrect }: ISelectedAnswer) {
  return {
    type: ActionTypes.addSelectedAnswer,
    payload: {
      selectedAnswer: {
        id,
        isCorrect,
      },
    },
  };
}

export function removeSelectedAnswer(id: string) {
  return {
    type: ActionTypes.removeSelectedAnswer,
    payload: {
      id,
    },
  };
}

export function resetSelectedAnswer() {
  return {
    type: ActionTypes.resetSelectedAnswer,
  };
}
