import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
	const numberOfCakes = useAppSelector(state => state.cake.numberOfCakes);
	const dispatch = useAppDispatch();

	return (
		<section className="section">
			<h2 className="section_title">Number of cakes - {numberOfCakes}</h2>
			<button
				type="button"
				className="order"
				onClick={() => dispatch(cakeActions.ordered(1))}
			>
				Order Cake
			</button>
			<button
				type="button"
				className="restock"
				onClick={() => dispatch(cakeActions.restocked(1))}
			>
				Restock Cakes
			</button>
		</section>
	);
};

export default CakeView;
