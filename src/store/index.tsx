import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IConfigsSelected } from './modules/configsSelected/types';

export interface IState {
  configsSelected: IConfigsSelected;
}

const store = createStore(rootReducer);

export default store;
