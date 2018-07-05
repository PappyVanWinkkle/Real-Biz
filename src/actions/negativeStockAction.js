/*
 ==========================
  ACTION FOR LOSER STOCKS 
 ==========================
 */

import axios from 'axios';
import { GET_NEGATIVE_STOCKS } from './types';

export default function getNegativeStocks() {
	const baseURL = `https://api.iextrading.com/1.0/stock/market/list/losers`;
	return function(dispatch) {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				dispatch({
					type: GET_NEGATIVE_STOCKS,
					payload: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
