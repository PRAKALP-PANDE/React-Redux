import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("user/update", async (user) => {
    const res = await axios.post("http://localhost:8800/api/users/1/update", user);
    return res.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Prakalp",
            email: "john@mail.com"
        },
        pending: null,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError: (state) => {
            state.pending = false;
            state.error = true
        },
        remove: (state) => {
            state = {}
        }
    },

    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, action) => {
            state.pending = false;
            state.error = false;
            state.userInfo = action.payload;
        },
        [updateUser2.rejected]: (state) => {
            state.pending = false;
            state.error = true;
        }
    }
})

export const { updateStart, updateSuccess, updateError, remove } = userSlice.actions;
export default userSlice.reducer;