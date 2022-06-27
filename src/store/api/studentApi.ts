import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

// 创建Api对象
/*
* RTK Q的所有功能需要使用该对象进行配置
* */

const studentApi = createApi({
    reducerPath: 'studentApi', // api的唯一标识，也需要在store中进行映射
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1/api'
    }), // query查询的基础信息，默认是fetch
    endpoints(build: any): any {
        // build 是一个请求构建器，通过build设置请求相关的信息
        return {
            getStudents: build.query({
                query(){
                    // 返回值会于baseUrl请求路径进行拼接
                    return 'students';
                }
            }),
        }
    }, // endpoints 用来指定api中的各种功能，是一个方法，需要一个对象作为法返回值
});

// api对象创建以后，对象中会自动根据各种方法去自动生成对应的钩子函数
// 通过这些钩子函数，可以用来向服务器发送请求
// 钩子函数的命名规则 --> useGetStudentsQuery

export const { useGetStudentsQuery } = studentApi;
export default studentApi;