import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchDelivery = createAsyncThunk('delivery/fetchDelivery', async ()=>{
    const {data} = await axios.get('/delivery');
    return data;
})


const initialState = {
    deliveryMethod: {
        items: [],
        status: 'loading',
    },
};

const deliverySlice = createSlice({
    name:'deliveryMethod',
    initialState,
    reducers:{

    },
    extraReducers:{
        // Получение статей
        [fetchDelivery.pending]:(state)=>{
            state.deliveryMethod.items = [];
            state.deliveryMethod.status='loading';
        },
        [fetchDelivery.fulfilled]:(state,action)=>{

            state.deliveryMethod.items = action;
            state.deliveryMethod.status='loaded';
        },
        [fetchDelivery.rejected]:(state)=>{
            state.deliveryMethod.items = [];
            state.deliveryMethod.status='error';
        },
    }
})

export const deliveryReducer = deliverySlice.reducer;