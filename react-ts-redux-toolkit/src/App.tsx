import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {
	return (
		<main className="root">
			<CakeView />
			<IceCreamView />
			<UserView />
		</main>
	);
}

export default App;
