import { useSelector, useDispatch } from "react-redux";
import { iceCreamActions } from "./iceCreamSlice";

const IceCreamView = () => {
	const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);
	const dispatch = useDispatch();

	return (
		<section className="section">
			<h2 className="section_title">Number of Ice Creams - {numberOfIceCreams}</h2>
			<button className="order" onClick={() => dispatch(iceCreamActions.ordered(1))}>
				Order Ice Cream
			</button>
			<button className="restock" onClick={() => dispatch(iceCreamActions.restocked(1))}>
				Restock Ice Creams
			</button>
		</section>
	);
};

export default IceCreamView;
