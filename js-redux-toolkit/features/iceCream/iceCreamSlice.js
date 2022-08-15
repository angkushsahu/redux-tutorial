const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
	numberOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
	name: "iceCream",
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.numberOfIceCreams -= action.payload;
		},
		restocked: (state, action) => {
			state.numberOfIceCreams += action.payload;
		},
	},
	// whenever the action is passed for those cake reducers which are specified below, then the iceCream reducer will run as specified below

	// 1st method:
	// extraReducers: {
	// 	["cake/ordered"]: (state, action) => {
	// 		state.numberOfIceCreams -= action.payload;
	// 	},
	// 	["cake/restocked"]: (state, action) => {
	// 		state.numberOfIceCreams += action.payload;
	// 	},
	// },

	// 2nd method:
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, (state, action) => {
			state.numberOfIceCreams -= action.payload;
		});
		builder.addCase(cakeActions.restocked, (state, action) => {
			state.numberOfIceCreams += action.payload;
		});
	},
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
