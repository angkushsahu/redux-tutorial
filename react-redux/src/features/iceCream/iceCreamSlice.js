import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	numberOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
	name: "iceCream",
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.numberOfIceCreams =
				state.numberOfIceCreams <= 0 ? 0 : state.numberOfIceCreams - action.payload;
		},
		restocked: (state, action) => {
			state.numberOfIceCreams += action.payload;
		},
	},
});

export default iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;
