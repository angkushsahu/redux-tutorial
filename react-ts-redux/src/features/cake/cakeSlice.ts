import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	numberOfCakes: number;
}

const initialState: InitialState = {
	numberOfCakes: 10,
};

const cakeSlice = createSlice({
	name: "cake",
	initialState,
	reducers: {
		ordered: (state, action: PayloadAction<number>) => {
			state.numberOfCakes =
				state.numberOfCakes <= 0 ? 0 : state.numberOfCakes - action.payload;
		},
		restocked: (state, action: PayloadAction<number>) => {
			state.numberOfCakes += action.payload;
		},
	},
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
