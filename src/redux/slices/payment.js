import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPayment = createAsyncThunk('payment/fetchPayment', async ()=>{
    const {data} = await axios.get('/payment');
    return data;
})



const initialState = {
    payment: {
        items: [],
        status: 'loading',
    },
};

const paymentSlice = createSlice({
    name:'payment',
    initialState,
    reducers:{

    },
    extraReducers:{
        // Получение статей
        [fetchPayment.pending]:(state)=>{
            state.payment.items = [];
            state.payment.status='loading';
        },
        [fetchPayment.fulfilled]:(state,action)=>{

            state.payment.items = action.payload;
            state.payment.status='loaded';
        },
        [fetchPayment.rejected]:(state)=>{
            state.payment.items = [];
            state.payment.status='error';
        },
    }
})

export const paymentReducer = paymentSlice.reducer;