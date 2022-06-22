import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import authReducer from '../features/authorization/authSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        authorization: authReducer
    }
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;