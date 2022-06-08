import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',// 名称，useSelector回调函数会使用这个获取当前slice中的state
    initialState: {
        value: 20
    }, // 初始状态
    reducers: {
        increment: state => {
            state.value  = state.value + 1
        },
        decrement: state => {
            state.value =  state.value - 1
        }
    } // action 以及对应的state修改逻辑
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;