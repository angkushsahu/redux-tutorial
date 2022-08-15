import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { iceCreamActions } from "./iceCreamSlice";

const IceCreamView = () => {
	const numberOfIceCreams = useAppSelector(state => state.iceCream.numberOfIceCreams);
	const dispatch = useAppDispatch();

	return (
		<section className="section">
			<h2 className="section_title">Number of Ice Creams - {numberOfIceCreams}</h2>
			<button
				type="button"
				className="order"
				onClick={() => dispatch(iceCreamActions.ordered(1))}
			>
				Order Ice Cream
			</button>
			<button
				type="button"
				className="restock"
				onClick={() => dispatch(iceCreamActions.restocked(1))}
			>
				Restock Ice Creams
			</button>
		</section>
	);
};

export default IceCreamView;
