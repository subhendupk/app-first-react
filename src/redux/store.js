import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './reducers/studentSlice';

export const store = configureStore({
    reducer: {
        allstudents: studentReducer
    },
});