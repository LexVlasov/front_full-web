import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchDelivery = createAsyncThunk('delivery/fetchDelivery', async ()=>{
    const {data} = await axios.get('/delivery');
    return data;
})


const initialState = {
    delivery: {
        items: [],
        status: 'loading',
    },
};

const deliverySlice = createSlice({
    name:'delivery',
    initialState,
    reducers:{

    },
    extraReducers:{
        // Получение статей
        [fetchDelivery.pending]:(state)=>{
            state.delivery.items = [];
            state.delivery.status='loading';
        },
        [fetchDelivery.fulfilled]:(state,action)=>{

            state.delivery.items = action.payload;
            state.delivery.status='loaded';
        },
        [fetchDelivery.rejected]:(state)=>{
            state.delivery.items = [];
            state.delivery.status='error';
        },
    }
})

export const deliveryReducer = deliverySlice.reducer;