const { applyMiddleware, combineReducers, createStore } = require("redux");
const { createLogger } = require("redux-logger");
const logger = createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

// Returns Actions For Cakes
function orderCake(quantity) {
	return {
		type: CAKE_ORDERED,
		payload: quantity,
	};
}
function restockCake(quantity) {
	return {
		type: CAKE_RESTOCKED,
		payload: quantity,
	};
}

// Returns Actions For Ice-creams
function orderIceCream(quantity) {
	return {
		type: ICE_CREAM_ORDERED,
		payload: quantity,
	};
}
function restockIceCream(quantity) {
	return {
		type: ICE_CREAM_RESTOCKED,
		payload: quantity,
	};
}

const initialCakeState = {
	numberOfCakes: 10,
};

const initialIceCreamState = {
	numberOfIceCreams: 10,
};

// REDUCERS: (previousState, action) => newState
function cakeReducer(state = initialCakeState, action) {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - action.payload,
			};
		case CAKE_RESTOCKED:
			return {
				...state,
				numberOfCakes: state.numberOfCakes + action.payload,
			};
		default:
			return state;
	}
}

function iceCreamReducer(state = initialIceCreamState, action) {
	switch (action.type) {
		case ICE_CREAM_ORDERED:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams - action.payload,
			};
		case ICE_CREAM_RESTOCKED:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams + action.payload,
			};
		default:
			return state;
	}
}

// combine multiple reducers
const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer });

// creating store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("🔰 Initial state 🔰");
console.table(store.getState());

// subscribing store
const unsubscribe = store.subscribe(() => {});

// dispatching actions
store.dispatch(orderCake(1));
store.dispatch(orderCake(2));
store.dispatch(orderCake(3));
store.dispatch(orderCake(4));
store.dispatch(restockCake(4));
store.dispatch(restockCake(6));
store.dispatch(orderIceCream(1));
store.dispatch(orderIceCream(2));
store.dispatch(orderIceCream(3));
store.dispatch(orderIceCream(4));
store.dispatch(restockIceCream(4));
store.dispatch(restockIceCream(6));

// ---------------------- used in olden days (not modern solution) ----------------------
// const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
// actions.orderCake(1);
// actions.orderCake(2);
// actions.orderCake(3);
// actions.orderCake(4);
// actions.restockCake(4);
// actions.restockCake(6);

unsubscribe();
