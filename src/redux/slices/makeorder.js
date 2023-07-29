import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchReturnData = createAsyncThunk('order/fetchReturnData', async(params) =>{
    
    const {data} = await axios.post('/order',params);
    return data;
})

export const fetchOneClick = createAsyncThunk('oneclick/fetchOneClick', async(params) =>{
    
    const {data} = await axios.post('/oneclick',params);
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
    extraReducers:(builder)=>{
        builder
        .addCase(fetchReturnData.pending,(state)=>{
            state.data = null;
            state.status='loading';
        })
        .addCase(fetchReturnData.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status='loaded';
        })
        .addCase(fetchReturnData.rejected,(state)=>{
            state.data = null;
            state.status='error';
        })
        .addCase(fetchOneClick.pending,(state)=>{
            state.data = null;
            state.status='loading';
        })
        .addCase(fetchOneClick.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status='loaded';
        })
        .addCase(fetchOneClick.rejected,(state)=>{
            state.data = null;
            state.status='error';
        });
    },
});
export const orderReducer = paymentSlice.reducer;