// combine here
import { combineReducers } from 'redux';
import money from './moneyReducer';
import news from './newsReducer';

export default combineReducers({
	money: money,
	news: news
});
