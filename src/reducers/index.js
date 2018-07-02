// combine here
import { combineReducers } from 'redux';
import money from './moneyReducer';

export default combineReducers({
	money: money
});
