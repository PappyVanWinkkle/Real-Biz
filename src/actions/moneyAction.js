/*
 ==========================
  ACTION TO GET RECIPES
 ==========================
 */

import axios from 'axios';
import { GET_ALL_INFORMATION } from './types';

const api_key = `58e269f14517bf680d74f7cbf85dc405`;

export default function getMarketInformation() {
	//const baseURL = `https://marketdata.websol.barchart.com/getHistory.json?apikey=${api_key}&symbol=IBM&type=daily&startDate=20160608000000`;
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
