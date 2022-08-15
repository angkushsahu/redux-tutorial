import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
		console.log("Running useEffect");
	}, [dispatch]);

	return (
		<section className="section">
			<h2 className="section_title">List of Users</h2>
			{user.loading && <h1 className="text-center">Loading ....</h1>}
			{!user.loading && user.error && <h1 className="text-center">{user.error}</h1>}
			{!user.loading && user.users.length && (
				<div>
					{user.users.map(user => (
						<li key={user.id} className="user_list">
							{user.name}
						</li>
					))}
				</div>
			)}
		</section>
	);
};

export default UserView;
