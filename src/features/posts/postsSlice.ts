import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import type { RootState } from '../../App/store';
import { Posts } from '../../api/posts/posts';
import { PostType }from '../../types';


interface PostsState {
    postList: Array<PostType>
    status: string
}

interface PostUpdate {
    id:number
    body:string
}
const initialState: PostsState = {
    postList: [],
    status: 'idle'
}

// Thunk functions 
export const fetchPosts = createAsyncThunk('get/allPosts', async () => {
    const response = await Posts.getPosts();
    return response;
});

// Create Slice
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        deletePost: (state: PostsState, action: PayloadAction<number>) => {
            state.postList =  state.postList.filter(post => post.id !== action.payload);
        },
        updatePost: (state: PostsState, action: PayloadAction<PostUpdate>) => {
            const { payload } = action;
            const { id, body } = payload;
            state.postList = state.postList.map(post =>{
                if(post.id === id) { return{...post, body: body }}
                return post;
            })
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