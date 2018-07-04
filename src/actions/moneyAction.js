/*
 ==========================
  ACTION TO GET MARKET DATA
 ==========================
 */

import axios from 'axios';
import { GET_ALL_INFORMATION } from './types';

export default function getMarketInformation() {
	const baseURL = `https://api.iextrading.com/1.0/stock/aapl/chart/6m`;
	return function(dispatch) {
		axios
			.get(`${baseURL}`)
			.then((response) => {
				dispatch({
					type: GET_ALL_INFORMATION,
					payload: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
