"use client"
import { addUser } from '@/redux/features/userSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export const AddUser = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleUserSubmit = () => {
        dispatch(addUser(name));
    }
    
    return (
        <div className='min-w-96 mx-auto bg-slate-200 p-5 rounded space-y-4'>
            <div>
                <input onChange={(e) => setName(e.target.value)} className="px-4 py-2 rounded w-full" type="text" placeholder="Input user" />
            </div>
            <div className="text-center">
                <button onClick={handleUserSubmit} className='bg-slate-500 text-white px-4 py-2 rounded'>Add user</button>
            </div>
        </div>
    )
}
