import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../App/store';
import storage from '../../utils/storage';

const accesGranted = storage.get('auth');

interface AuthState {
    auth: boolean
}

const initialState:AuthState = {
    auth: !!accesGranted
}

//Create Slice
export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setAuthorization: (state:AuthState, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
    }
});

export const { setAuthorization } = authSlice.actions;
export const selectAuth = (state:RootState) => state.authorization.auth;
export default authSlice.reducer;