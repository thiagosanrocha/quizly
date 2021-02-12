import { ActionTypes } from './types';

export function addSelectedCategory(id: number) {
  return {
    type: ActionTypes.addSelectedCategory,
    payload: {
      selectedCategory: id,
    },
  };
}

export function addSelectedDifficulty(difficulty: string) {
  return {
    type: ActionTypes.addSelectedDifficulty,
    payload: {
      selectedDifficulty: difficulty,
    },
  };
}
