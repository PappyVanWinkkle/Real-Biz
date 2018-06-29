/* ========================
    STORE FOR THE APPLICATION
============================== */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(
	// rootreducers
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;