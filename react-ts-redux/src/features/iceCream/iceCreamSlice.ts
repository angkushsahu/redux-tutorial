import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	numberOfIceCreams: number;
}

const initialState: InitialState = {
	numberOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
	name: "iceCream",
	initialState,
	reducers: {
		ordered: (state, action: PayloadAction<number>) => {
			state.numberOfIceCreams =
				state.numberOfIceCreams <= 0 ? 0 : state.numberOfIceCreams - action.payload;
		},
		restocked: (state, action: PayloadAction<number>) => {
			state.numberOfIceCreams += action.payload;
		},
	},
});

export default iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;
