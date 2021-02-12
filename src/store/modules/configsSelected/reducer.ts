import { Reducer } from 'redux';

import { IConfigsSelected } from './types';

const INITIAL_STATE: IConfigsSelected = {
  selectedCategory: 0,
  selectedDifficulty: 'easy',
};

const configsSelected: Reducer<IConfigsSelected> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'ADD_SELECTED_CATEGORY': {
      const { selectedCategory } = action.payload;

      return {
        ...state,
        selectedCategory,
      };
    }

    case 'ADD_SELECTED_DIFFICULTY': {
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
