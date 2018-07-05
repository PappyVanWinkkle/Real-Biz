/* ========================
   REDUCER FOR NEGATIVE STOCKS
 ============================ */

import { GET_NEGATIVE_STOCKS } from '../actions/types';

const initialState = {
	stocks: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_NEGATIVE_STOCKS:
			return {
				...state,
				stocks: action.payload
			};
		default:
			return state;
	}
}
