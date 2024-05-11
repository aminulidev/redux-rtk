"use client"
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchApiUsers} from "@/redux/features/userSlice";

const ApiUsersPage = () => {
	const dispatch = useDispatch();

	const apiUsers = useSelector(data => data.apiUsers);
	console.log("apiUsers", apiUsers);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="space-y-4 text-center">
				<button onClick={() => dispatch(fetchApiUsers())} className="px-4 py-2 bg-slate-600 text-white rounded">Fetch users</button>
				<div>
					{apiUsers.length ? apiUsers.map(user => <p>{user.name}</p>) : "Fetch user list to click Fetch users button!"}
				</div>
			</div>
		</div>
	);
};

export default ApiUsersPage;