/*
==========================
  NEWS ACTION
==========================
*/

import axios from 'axios';
import { GET_FINANCIAL_NEWS } from './types';

export default function getMarketNews() {
	const api_key = `922f29b396de45a4bd3d49152024f5ba`;
	const baseUrl = `https://newsapi.org/v2/top-headlines?sources=financial-post&apiKey=${api_key}`;
	return function(dispatch) {
		axios
			.get(`${baseUrl}`)
			.then((response) => {
				dispatch({
					type: GET_FINANCIAL_NEWS,
					payload: response.data.articles
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
