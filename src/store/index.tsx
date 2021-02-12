import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IConfigsSelected } from './modules/configsSelected/types';
import { ISelectedAnswer } from './modules/selectedAnswers/types';

export interface IState {
  configsSelected: IConfigsSelected;
  selectedAnswers: ISelectedAnswer[];
}

const store = createStore(rootReducer);

export default store;
