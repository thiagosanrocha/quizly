import { Reducer } from 'redux';

import { IConfigsSelected, ActionTypes } from './types';

const INITIAL_STATE: IConfigsSelected = {
  selectedCategory: 0,
  selectedDifficulty: 'easy',
};

const configsSelected: Reducer<IConfigsSelected> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.addSelectedCategory: {
      const { selectedCategory } = action.payload;

      return {
        ...state,
        selectedCategory,
      };
    }

    case ActionTypes.addSelectedDifficulty: {
      const { selectedDifficulty } = action.payload;

      return {
        ...state,
        selectedDifficulty,
      };
    }

    default: {
      return state;
    }
  }
};

export default configsSelected;
