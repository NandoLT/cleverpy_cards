import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import type { RootState } from '../../App/store';
import { getPosts } from '../../dataService/posts/posts';


interface PostsState {
    postList: Array<Object>
    status: string
}

const initialState: PostsState = {
    postList: [],
    status: 'idle'
}

// Thunk functions 
export const fetchPosts = createAsyncThunk('get/allPosts', async () => {
    const { data } = await getPosts();
    return data.result
});

// Create Slice
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        deletePost: (state: PostsState, action: PayloadAction<number>) => {
            console.log('DELETE POST');
        },
        updatePost: (state: PostsState, action: PayloadAction<number>) => {
            console.log('UPDATE POST');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succes';
                state.postList = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = 'loading';
            })
    }
});

export const { deletePost, updatePost } = postsSlice.actions;
export const selectPostsListData = (state: RootState) => state.posts.postList;
export default postsSlice.reducer;