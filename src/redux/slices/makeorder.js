import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchReturnData = createAsyncThunk('order/fetchReturnData', async(params) =>{
    
    const {data} = await axios.post('/order',params);
    return data;
})

const initialState = {
    data: null,
    status:'loading',
};


const paymentSlice = createSlice({
    name:'order',
    initialState,
    reducers:{

    },
    extraReducers:{
        // Получение статей
        [fetchReturnData.pending]:(state)=>{
            state.data = null;
            state.status='loading';
        },
        [fetchReturnData.fulfilled]:(state,action)=>{
            state.data = action.payload;
            state.status='loaded';
        },
        [fetchReturnData.rejected]:(state)=>{
            state.data = null;
            state.status='error';
        },
    }
});
export const orderReducer = paymentSlice.reducer;