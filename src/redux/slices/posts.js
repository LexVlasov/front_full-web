import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchGoods = createAsyncThunk('allgood/fetchGoods', async ()=>{
    const {data} = await axios.get('/allgood');
    return data;
})

export const fetchTypes = createAsyncThunk('allgood/fetchTypes', async ()=>{
    const {data} = await axios.get('/groups');
    return data;
})

export const fetchGoodsbyType = createAsyncThunk('allgood/fetchGoodsbyType', async (type)=>{
    const {data} = await axios.get(`/types/${type}`);
    return data;
})



const initialState = {
    allgood: {
        items: [],
        status: 'loading',
    },
    types:{
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

const goodsSlice = createSlice({
    name:'allgood',
    initialState,
    reducers:{

    },
    extraReducers:{
        // Получение статей
        [fetchGoods.pending]:(state)=>{
            state.allgood.items = [];
            state.allgood.status='loading';
        },
        [fetchGoods.fulfilled]:(state,action)=>{

            state.allgood.items = action.payload;
            state.allgood.status='loaded';
        },
        [fetchGoods.rejected]:(state)=>{
            state.allgood.items = [];
            state.allgood.status='error';
        },
        // Получение типов
        [fetchTypes.pending]:(state)=>{
            state.types.items = [];
            state.types.status='loading';
        },
        [fetchTypes.fulfilled]:(state,action)=>{

            state.types.items = action.payload;
            state.types.status='loaded';
        },
        [fetchTypes.rejected]:(state)=>{
            state.types.items = [];
            state.types.status='error';
        },
        // // Удаление статей
        // [fetchRemovePost.pending]:(state, action)=>{
        //     state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg);
        // },
        //Получение статей по тэгу
        [fetchGoodsbyType.pending]:(state)=>{
            state.allgood.items = [];
            state.allgood.status='loading';
        },
        [fetchGoodsbyType.fulfilled]:(state,action)=>{

            state.allgood.items = action.payload;
            state.allgood.status='loaded';
        },
        [fetchGoodsbyType.rejected]:(state)=>{
            state.allgood.items = [];
            state.allgood.status='error';
        },

    }
})

export const goodsReducer = goodsSlice.reducer;