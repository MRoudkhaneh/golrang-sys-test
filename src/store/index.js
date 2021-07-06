import {configureStore} from "@reduxjs/toolkit";
import {userListReducer} from "./reducer/usersSlice";


export const store = configureStore({
    reducer: {
        usersList: userListReducer,
    }
});
