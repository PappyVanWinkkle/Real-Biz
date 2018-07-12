// combine here
import { combineReducers } from 'redux';
import money from './moneyReducer';
import news from './newsReducer';
import stocks from './negativeReducer';

export default combineReducers({
	money: money,
	news: news,
	stocks: stocks
});
