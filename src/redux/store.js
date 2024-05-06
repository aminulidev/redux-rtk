import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/redux/features/userSlice";

export const store = configureStore({
    reducer
});