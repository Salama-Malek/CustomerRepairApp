import { createStore, combineReducers } from 'redux';
import repairReducer from '../reducers/repairReducer';

const rootReducer = combineReducers({
  repairs: repairReducer,
});

const store = createStore(rootReducer);

export default store;
