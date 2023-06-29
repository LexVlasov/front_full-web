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
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDelivery.pending,(state)=>{
            state.delivery.items = [];
            state.delivery.status='loading';
        })
        .addCase(fetchDelivery.fulfilled,(state,action)=>{

            state.delivery.items = action.payload;
            state.delivery.status='loaded';
        })
        .addCase(fetchDelivery.rejected,(state)=>{
            state.delivery.items = [];
            state.delivery.status='error';
        });
    },
})

export const deliveryReducer = deliverySlice.reducer;