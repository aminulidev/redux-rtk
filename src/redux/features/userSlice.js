const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action);

            const data = {
                id: nanoid(),
                name: action.payload
            }

            state.users.push(data);
        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;