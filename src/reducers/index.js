import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import parkingslots from './nearByParkingReducer'
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  parkingslots,
  ajaxCallsInProgress
});

export default rootReducer;
