import { combineReducers } from 'redux';
import currentReducer from './currentReducer';

const rootReducer = combineReducers({
  current: currentReducer,
});

export default rootReducer;
