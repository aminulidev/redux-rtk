const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ?? []
}

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
    }
});

export const {
    addUser,
    removeUser,
    removeAllUser
} = userSlice.actions;
export default userSlice.reducer;