/* ========================
   REDUCER FOR THE FOOD
 ============================ */

import { GET_ALL_INFORMATION } from '../actions/types';

const initialState = {
	money: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_INFORMATION:
			return {
				...state,
				money: action.payload
			};
		default:
			return state;
	}
}
