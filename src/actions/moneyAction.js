/*
 ==========================
  ACTION TO GET RECIPES
 ==========================
 */

import axios from 'axios';
import { GET_ALL_INFORMATION } from './types';

//const app_id = `ee94393f`;
//const api_key = `75600454dfb1a011dda06b02ecfdecc1`;

export default function getMarketInformation() {
	const baseURL = `https://marketdata.websol.barchart.com/getHistory.json?apikey=58e269f14517bf680d74f7cbf85dc405&symbol=IBM&type=daily&startDate=20160608000000`;
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
