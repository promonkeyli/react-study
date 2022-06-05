import {useReducer} from "react";
import ViewBox from "../component/ViewBox";

enum ComputeTypeEnum {
    'Add' = 'add',
    'Sub' = 'sub',
}
type CounterState = {
    count: number
}
type CounterAction = {
    type: ComputeTypeEnum ,
    payload?: any // payload此处主要用于缓存初始值，reset可以恢复初始值
}
/**
 * useReducer：
 * 1、参数：reducer函数，初始值/初始函数参数，初始函数（可选）
 * 2、返回值：当前状态，状态调度函数
 * 3、Lazy initialization: 这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利：
 * */

function counterReducer(state: CounterState, action: CounterAction) {
    const {count} = state;
    switch (action.type as ComputeTypeEnum) {
        case ComputeTypeEnum.Add:
            return {count: count + 1};
        case ComputeTypeEnum.Sub:
            return {count: count - 1};
        default:
            return {count};
    }
}
const initVal = { count: 0 }


function init(params: CounterState) {
    const {count} = params;
    return {count}
}


function UseReducer() {
    // useReducer state更改函数组件会重新渲染，此处初始话的值写在内部外部都可以
    // initial只会执行一次，但最好还是提出组件外部，对性能会有所提升
    const [state, dispatch] = useReducer(counterReducer, initVal, init);
    console.log('re-render');
    return (
        <>
            <ViewBox value={state.count}/>
            <hr/>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <button onClick={() =>dispatch({type: ComputeTypeEnum.Add})}>Increment</button>
                <button onClick={() =>dispatch({type: ComputeTypeEnum.Sub})}>reduce</button>
            </div>
        </>
    )
}
export default UseReducer;