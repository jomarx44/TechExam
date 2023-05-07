import {combineReducers} from 'redux';
import shopReducer from './services/reducer';
const appReducer = combineReducers({
  shopReducer,
});

export default appReducer;
