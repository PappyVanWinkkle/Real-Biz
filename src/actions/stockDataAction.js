/*
 ==========================
  ACTION FOR STOCK DATA
 ==========================
 */

import axios from 'axios';
import { GET_DETAILED_DATA } from './types';

export default function getStockData(symbol) {
	const baseURL = `https://api.iextrading.com/1.0/stock/${symbol}/dividends/5y`;
	return function(dispatch) {
		axios.get(`${baseURL}`).then((response) => {
			dispatch({
				type: GET_DETAILED_DATA,
				payload: response.data
			});
		});
	};
}
