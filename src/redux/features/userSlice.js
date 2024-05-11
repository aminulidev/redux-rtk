import {createAsyncThunk} from "@reduxjs/toolkit";

const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ?? [],
    apiUsers: []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let userLocalData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userLocalData);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => {
                return user.id !== action.payload;
            });
        },
        removeAllUser: (state, action) => {
            state.users = [];
            localStorage.removeItem("users");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.apiUsers = action.payload
        })
    }
});

export const {
    addUser,
    removeUser,
    removeAllUser
} = userSlice.actions;
export default userSlice.reducer;