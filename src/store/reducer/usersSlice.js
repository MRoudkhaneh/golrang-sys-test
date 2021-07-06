import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "../../service/API"
import ApiRoute from "../../service/ApiRoute";

export const fetchingUser = createAsyncThunk(
    'users/fetch',
    async () => {
        const {data} = await API.get(ApiRoute.users);
        return data
    }
);

export const userList = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchingUser.pending, ((state, action) => {
                state.loading = true
            }))
            .addCase(fetchingUser.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(fetchingUser.rejected, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
    },
});

export const {} = userList.actions;

export const userListReducer = userList.reducer;
