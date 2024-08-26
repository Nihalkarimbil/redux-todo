import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './slice/TodoSlice';

const store=configureStore({
    reducer:{
        Todos:TodoSlice,
    }
})

export default store