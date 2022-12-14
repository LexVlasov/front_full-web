import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const {data} = await axios.get('/posts');
    return data;
})

export const fetchTags = createAsyncThunk('posts/fetchTags', async ()=>{
    const {data} = await axios.get('/tags');
    return data;
})

export const fetchComment = createAsyncThunk('posts/fetchComment', async ()=>{
    const {data} = await axios.get('/comment');
    return data;
})

export const fetchCommentByPost = createAsyncThunk('posts/fetchCommentByPost', async (id)=>{
    const {data} = await axios.get(`/posts/${id}/comment`);
    return data;
})

export const fetchPostbyTag = createAsyncThunk('posts/fetchPostbyTag', async (tag)=>{
    const {data} = await axios.get(`/tags/${tag}`);
    return data;
})


export const fetchRemovePost = createAsyncThunk('posts/fetchRemovepost', async (id)=>
    axios.delete(`/posts/${id}`)

)

export const fetchPopularPosts = createAsyncThunk('posts/fetchPopularPosts', async ()=>{
    const {data} = await axios.get('/popular');
    return data;
})


export const fetchPostbyUser = createAsyncThunk('posts/fetchPostbyUser', async (user)=>{
    const {data} = await axios.get(`/account/posts/${user}`);
    return data;
})

export const fetchUser = createAsyncThunk('user/fetchUser', async (user)=>{
    const {data} = await axios.get(`/account/${user}`);
    return data;
})

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags:{
        items:[],
        status:'loading',
    },
    comments:{
        items:[],
        status:'loading',
    },
    popularPosts:{
        items: [],
        status: 'loading',
    }
    ,user:{
        items:[],
        status:'loading',
    }
}

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    },
    extraReducers:{
        // Получение статей
        [fetchPosts.pending]:(state)=>{
            state.posts.items = [];
            state.posts.status='loading';
        },
        [fetchPosts.fulfilled]:(state,action)=>{

            state.posts.items = action.payload;
            state.posts.status='loaded';
        },
        [fetchPosts.rejected]:(state)=>{
            state.posts.items = [];
            state.posts.status='error';
        },
        // Получение тэгов
        [fetchTags.pending]:(state)=>{
            state.tags.items = [];
            state.tags.status='loading';
        },
        [fetchTags.fulfilled]:(state,action)=>{

            state.tags.items = action.payload;
            state.tags.status='loaded';
        },
        [fetchTags.rejected]:(state)=>{
            state.tags.items = [];
            state.tags.status='error';
        },
        // Удаление статей
        [fetchRemovePost.pending]:(state, action)=>{
            state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg);
        },
        //Получение статей по тэгу
        [fetchPostbyTag.pending]:(state)=>{
            state.posts.items = [];
            state.posts.status='loading';
        },
        [fetchPostbyTag.fulfilled]:(state,action)=>{

            state.posts.items = action.payload;
            state.posts.status='loaded';
        },
        [fetchPostbyTag.rejected]:(state)=>{
            state.posts.items = [];
            state.posts.status='error';
        },
        //Получение комментариев
        [fetchComment.pending]:(state)=>{
            state.comments.items = [];
            state.comments.status='loading';
        },
        [fetchComment.fulfilled]:(state,action)=>{

            state.comments.items = action.payload;
            state.comments.status='loaded';
        },
        [fetchComment.rejected]:(state)=>{
            state.comments.items = [];
            state.comments.status='error';
        },
        //Получение комментариев по посту
        [fetchCommentByPost.pending]:(state)=>{
            state.comments.items = [];
            state.comments.status='loading';
        },
        [fetchCommentByPost.fulfilled]:(state,action)=>{

            state.comments.items = action.payload;
            state.comments.status='loaded';
        },
        [fetchCommentByPost.rejected]:(state)=>{
            state.comments.items = [];
            state.comments.status='error';
        },
        //Получение популярных статей
        [fetchPopularPosts.pending]:(state)=>{
            state.popularPosts.items = [];
            state.popularPosts.status='loading';
        },
        [fetchPopularPosts.fulfilled]:(state,action)=>{

            state.popularPosts.items = action.payload;
            state.popularPosts.status='loaded';
        },
        [fetchPopularPosts.rejected]:(state)=>{
            state.popularPosts.items = [];
            state.popularPosts.status='error';
        },
        //Получение статей по юзеру
        [fetchPostbyUser.pending]:(state)=>{
            state.posts.items = [];
            state.posts.status='loading';
        },
        [fetchPostbyUser.fulfilled]:(state,action)=>{

            state.posts.items = action.payload;
            state.posts.status='loaded';
        },
        [fetchPostbyUser.rejected]:(state)=>{
            state.posts.items = [];
            state.posts.status='error';
        },
        //Получение статей по юзеру
        [fetchUser.pending]:(state)=>{
            state.user.items = [];
            state.user.status='loading';
        },
        [fetchUser.fulfilled]:(state,action)=>{

            state.user.items = action.payload;
            state.user.status='loaded';
        },
        [fetchUser.rejected]:(state)=>{
            state.user.items = [];
            state.user.status='error';
        },
    }
})

export const postsReducer = postsSlice.reducer;