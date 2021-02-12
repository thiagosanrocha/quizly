import { combineReducers } from 'redux';

import configsSelected from './configsSelected/reducer';
import selectedAnswers from './selectedAnswers/reducer';

export default combineReducers({
  configsSelected,
  selectedAnswers,
});
