import { createSlice } from "@reduxjs/toolkit";
 
// Utility Service 
import { getToken } from '../../utils/AuthService';
// import { getToken, getUser } from '../../utils/AuthService';

const initialState = {
    token: getToken(),
    // user: getUser()
    user: {token: '1', name: 'Azad Akhtar', email: 'azadakhtar115@gmail.com'}
};
 
export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
}); 

export const {
    setToken,
    setUser
} = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;