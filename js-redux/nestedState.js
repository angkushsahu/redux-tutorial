import { createStore } from "redux";
import { produce } from "immer";

const initialState = {
	name: "Angkush",
	address: {
		street: "Gar-ali",
		city: "Jorhat",
		state: "Assam",
	},
};

// constant to avoid mistakes
const STREET_UPDATED = "STREET_UPDATED";

// returns an action
const updateStreet = street => {
	return {
		type: STREET_UPDATED,
		payload: street,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case STREET_UPDATED:
			// return {
			// 	...state,
			// 	address: {
			// 		...state.address,
			// 		street: action.payload,
			// 	},
			// };

			// ------- ADDING IMMER -------
			return produce(state, draft => {
				draft.address.street = action.payload;
			});
		default:
			return state;
	}
};

const store = createStore(reducer);
console.log("🔰 Initial state 🔰");
console.table(store.getState());

const unsubscribe = store.subscribe(() => {
	console.log("🚀 Updated state 🚀");
	console.table(store.getState());
});

store.dispatch(updateStreet("Jalukbari"));

unsubscribe();
