import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
	const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
	const dispatch = useDispatch();

	return (
		<section className="section">
			<h2 className="section_title">Number of cakes - {numberOfCakes}</h2>
			<button className="order" onClick={() => dispatch(cakeActions.ordered(1))}>
				Order Cake
			</button>
			<button className="restock" onClick={() => dispatch(cakeActions.restocked(1))}>
				Restock Cakes
			</button>
		</section>
	);
};

export default CakeView;
