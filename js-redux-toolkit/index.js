const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/iceCream/iceCreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("Initial state ", store.getState());
const unsubscribe = store.subscribe(() => {
	console.log("Updated state ", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered(2));
// store.dispatch(cakeActions.restocked(11));
// store.dispatch(cakeActions.ordered(5));
// store.dispatch(cakeActions.ordered(6));
// store.dispatch(iceCreamActions.ordered(2));
// store.dispatch(iceCreamActions.restocked(11));
// store.dispatch(iceCreamActions.ordered(5));
// store.dispatch(iceCreamActions.ordered(6));

// unsubscribe();
