export function addSelectedCategory(id: number) {
  return {
    type: 'ADD_SELECTED_CATEGORY',
    payload: {
      selectedCategory: id,
    },
  };
}

export function addSelectedDifficulty(difficulty: string) {
  return {
    type: 'ADD_SELECTED_DIFFICULTY',
    payload: {
      selectedDifficulty: difficulty,
    },
  };
}
