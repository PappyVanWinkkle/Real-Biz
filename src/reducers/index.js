// combine here
import { combineReducers } from 'redux';
import money from './moneyReducer';
import news from './newsReducer';
import stocks from './negativeReducer';
import data from './stockDataReducer';

export default combineReducers({
	money: money,
	news: news,
	stocks: stocks,
	data: data
});
