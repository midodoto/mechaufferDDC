import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import devisReducer from './devisReducer.js';

const reducers = combineReducers({
    user: userReducer,
    devis: devisReducer,
});

export default reducers;
