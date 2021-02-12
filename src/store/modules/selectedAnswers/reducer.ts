import { Reducer } from 'redux';

import { ISelectedAnswer, ActionTypes } from './types';

const INITIAL_STATE: ISelectedAnswer[] = [];

const selectedAnswers: Reducer<ISelectedAnswer[]> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.addSelectedAnswer: {
      const { id, isCorrect } = action.payload.selectedAnswer;

      return [
        ...state,
        {
          id,
          isCorrect,
        },
      ];
    }

    case ActionTypes.removeSelectedAnswer: {
      const { id } = action.payload;

      const findIndexAnswer = state.findIndex(anwer => anwer.id === id);

      if (findIndexAnswer >= 0) {
        const newState = state;

        newState.splice(findIndexAnswer, 1);

        return [...newState];
      }

      return state;
    }

    case ActionTypes.resetSelectedAnswer: {
      return INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default selectedAnswers;
