import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
	const user = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<section className="section">
			<h2 className="section_title">List of Users</h2>
			{user.loading && <h1 className="text-center">Loading ....</h1>}
			{!user.loading && user.error && <h1 className="text-center">{user.error}</h1>}
			{!user.loading && user.users.length && (
				<ul>
					{user.users.map(user => (
						<li key={user.id} className="user_list">
							{user.name}
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default UserView;
