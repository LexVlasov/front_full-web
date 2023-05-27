import {configureStore} from '@reduxjs/toolkit';
import { goodsReducer } from './slices/posts';
import { authReducer } from './slices/auth';
import {deliveryReducer} from './slices/delivery'

const store = configureStore({
    reducer: {
        goods:goodsReducer,
        auth:authReducer,
        delivery:deliveryReducer,
    }
});

export default store;