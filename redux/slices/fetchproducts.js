import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../components/axios';

export const fetchGoods = createAsyncThunk('allgood/fetchGoods', async ()=>{
    const {data} = await axios.get('/allgood');
    return data;
})

export const fetchPopular = createAsyncThunk('allgood/fetchPopular', async ()=>{
  const {data} = await axios.get('/popular');
  return data;
})

export const fetchSale = createAsyncThunk('sale/fetchSale', async ()=>{
  const {data} = await axios.get('/sale');
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

export const fetchComments = createAsyncThunk('comments/fetchComments', async ()=>{
  const {data} = await axios.get('/comments');
  return data;
})


const initialState = {
    allgood: {
        items: [],
        status: 'loading',
    },
    sale: {
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
    popular:{
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
          })
          .addCase(fetchPopular.pending, (state) => {
            state.popular.items = [];
            state.popular.status = 'loading';
          })
          .addCase(fetchPopular.fulfilled, (state, action) => {
            state.popular.items = action.payload;
            state.popular.status = 'loaded';
          })
          .addCase(fetchPopular.rejected, (state) => {
            state.popular.items = [];
            state.popular.status = 'error';
          })
          .addCase(fetchSale.pending, (state) => {
            state.sale.items = [];
            state.sale.status = 'loading';
          })
          .addCase(fetchSale.fulfilled, (state, action) => {
            state.sale.items = action.payload;
            state.sale.status = 'loaded';
          })
          .addCase(fetchSale.rejected, (state) => {
            state.sale.items = [];
            state.sale.status = 'error';
          })
          .addCase(fetchComments.pending, (state) => {
            state.comments.items = [];
            state.comments.status = 'loading';
          })
          .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments.items = action.payload;
            state.comments.status = 'loaded';
          })
          .addCase(fetchComments.rejected, (state) => {
            state.comments.items = [];
            state.comments.status = 'error';
          });
      },
    });
    
    export const goodsReducer = goodsSlice.reducer;