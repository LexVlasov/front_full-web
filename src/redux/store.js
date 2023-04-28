import {configureStore} from '@reduxjs/toolkit';
import { goodsReducer } from './slices/posts';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        goods:goodsReducer,
        auth:authReducer,
    }
});

export default store;