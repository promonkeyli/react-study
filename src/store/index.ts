import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/feature/counterSlice';



const store = configureStore({
    reducer: {
        counter : counterReducer
    }
})
export default store