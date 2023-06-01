import {configureStore} from '@reduxjs/toolkit';
import { goodsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import {deliveryReducer} from './slices/delivery'
import {paymentReducer} from "./slices/payment";
import {orderReducer} from"./slices/makeorder";

const store = configureStore({
    reducer: {
        goods:goodsReducer,
        auth:authReducer,
        delivery:deliveryReducer,
        payment:paymentReducer,
        order:orderReducer,
    }
});

export default store;