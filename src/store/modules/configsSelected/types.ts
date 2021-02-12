export enum ActionTypes {
  addSelectedCategory = 'ADD_SELECTED_CATEGORY',
  addSelectedDifficulty = 'ADD_SELECTED_DIFFICULTY',
}

export interface IConfigsSelected {
  selectedCategory: number;
  selectedDifficulty: string;
}
