import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
* RTK构建store
* 1、createSlice: 创建reducers切片，切片是对于reducer的细化，最终将slice合并为一个reducer
* 2、
* 3、
* */



// createSlice 需要传入options配置对象作为属性，slice会自动生成action判断
export const studySlice = createSlice({
    name: 'stu', // 用来自动生成action type 属性
    initialState:  {
        name: '孙悟空',
        age: '11',
    }, // 当前切片的state的初始值
    reducers: { // 指定state中的各种操作，直接在对象中添加方法, 每一个方法中都会传入state以及action
        setName(state, action) { // state只是一个代理对象，可以直接修改state
            const { payload } = action;
            state.name = payload;
        },
        setAge(state, action) {
            const { payload } = action;
            state.age = payload;
        }
    }
});
// const { setName } = studySlice.actions; // actions 中存储的 是slice自动生成的action creator， 调用函数后会自动创建对象

// const a = setName('haha');
// console.log(a); // {type: 'stu/setNAme' payload: undefined} type 是name / reducers中的函数名称，不需要手动再写type，payload

// 创建store，用来创建store对象，需要一个配置对象作为参数


const store = configureStore({
    reducer: {
        student: studySlice.reducer
    } // 由slice自动生成的，多个需要使用对象声明
})

export const { setName, setAge } = studySlice.actions;

export default store;
