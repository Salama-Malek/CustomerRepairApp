import { combineReducers } from 'redux';
import repairReducer from './repairReducer';

const rootReducer = combineReducers({
  repairs: repairReducer,
  // Add more reducers here if needed
});

export default rootReducer;
