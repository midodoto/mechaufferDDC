import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import devisReducer from './devisReducer.js';
import tokenReducer from './tokenReducer.js';

const reducers = combineReducers({
  user: userReducer,
  devis: devisReducer,
  token: tokenReducer,
});

export default reducers;
