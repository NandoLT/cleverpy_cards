import { configureStore } from '@reduxjs/toolkit';

import postsreducer from '../features/posts/postsSlice';

const store = configureStore({
    reducer: {
        posts: postsreducer
    }
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;