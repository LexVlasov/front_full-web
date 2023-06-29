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
};

const goodsSlice = createSlice({
    name:'allgood',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchGoods.pending, (state) => {
            state.allgood.items = [];
            state.allgood.status = 'loading';
          })
          .addCase(fetchGoods.fulfilled, (state, action) => {
            state.allgood.items = action.payload;
            state.allgood.status = 'loaded';
          })
          .addCase(fetchGoods.rejected, (state) => {
            state.allgood.items = [];
            state.allgood.status = 'error';
          })
          .addCase(fetchTypes.pending, (state) => {
            state.types.items = [];
            state.types.status = 'loading';
          })
          .addCase(fetchTypes.fulfilled, (state, action) => {
            state.types.items = action.payload;
            state.types.status = 'loaded';
          })
          .addCase(fetchTypes.rejected, (state) => {
            state.types.items = [];
            state.types.status = 'error';
          })
          .addCase(fetchGoodsbyType.pending, (state) => {
            state.allgood.items = [];
            state.allgood.status = 'loading';
          })
          .addCase(fetchGoodsbyType.fulfilled, (state, action) => {
            state.allgood.items = action.payload;
            state.allgood.status = 'loaded';
          })
          .addCase(fetchGoodsbyType.rejected, (state) => {
            state.allgood.items = [];
            state.allgood.status = 'error';
          });
      },
    });
    
    export const goodsReducer = goodsSlice.reducer;