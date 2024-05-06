"use client";
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {removeAllUser, removeUser} from "@/redux/features/userSlice";

export const UsersList = () => {
    const usersData = useSelector((data) => data.users);

    const dispatch = useDispatch();

  return (
    <div className="bg-slate-100 p-5 space-y-3 rounded min-w-96 max-h-96 overflow-y-auto">
        {usersData.length ?
            <>
                <button onClick={() => dispatch(removeAllUser())}
                        className="px-2 py-1 bg-slate-500 text-white rounded">Remove All
                </button>
                {usersData.map(user =>
                    <div key={user.id} className="bg-slate-300 px-4 py-2 rounded flex items-center justify-between">
                        <span>{user.name}</span>
                        <button onClick={() => dispatch(removeUser(user.id))}
                                className="px-2 py-1 bg-slate-500 text-white rounded">Remove
                        </button>
                    </div>
                )}</> : <p className="text-center">No user listed!</p>
        }

    </div>
  )
}
