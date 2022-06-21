import {ChangeEvent, useReducer, useState} from "react";
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

// todo list component

type TodosType = {
    id?: number,
    value?: string,
}
enum TodoEnum {
    ADD = 'add',
    DEL = 'del',
    UPDATE = 'update',
    SELECT = 'select'
}
type TodoActionType = {
    type: TodoEnum,
    payload: TodosType
}
interface TodosItem {
    id: number;
    value?: string;
    handleDelete: (id: number) => void;
    handleValueChange: (v: TodosType) => void;
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
    return (
        <>
            <ViewBox value={state.count}/>
            <hr/>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <button onClick={() =>dispatch({type: ComputeTypeEnum.Add})}>Increment</button>
                <button onClick={() =>dispatch({type: ComputeTypeEnum.Sub})}>reduce</button>
            </div>
        {/*todolist-useReducer 实现*/}
            <div style={{ height: '200px', border: '2px solid #eee', marginTop: '10px' , paddingTop: '20px'}}>
                <Todos/>
            </div>
        </>
    )
}
function todosReducer(state: Array<TodosType>, action: TodoActionType): any {
    const { type, payload } = action;
    switch (type){
        case TodoEnum.ADD:
            const newArr = state.map(i => i);
            newArr.push({id: state.length + 1, value: payload.value});
            return newArr;
        case TodoEnum.DEL:
            return state.filter(i => (i.id !== payload.id))
        case TodoEnum.UPDATE:
            const target = state.findIndex(i => i.id === payload.id);
            if (target !== -1){
                state[target].value = payload.value;
            }
            return state;
        case TodoEnum.SELECT:
            const { value } = payload;
            return !!value ? state.filter(i => i.value === value) : state;
        default:
           return state;
    }
}
const initialState = [{id: 1, value: '123'}]
function Todos() {
    const [todosState, dispatch] = useReducer(todosReducer, initialState);
    const [addState, setAddState] = useState<string>('');
    
    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
       dispatch({type: TodoEnum.SELECT, payload: {value}})
    }
    const handleAdd = () => {
        dispatch({type: TodoEnum.ADD, payload: {value: addState}})
    }
    const handleDelete = (id: number) => {
       dispatch({type: TodoEnum.DEL, payload: {id}})
    }
    const handleUpdate = (e: any) => {
        dispatch({type: TodoEnum.UPDATE, payload: e})
    }
    const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddState(e.target.value);
    }
    return (
        <div style={{display: "grid", justifyContent: 'center'}}>
           <div>
               <input type="text" onBlur={handleSelect} placeholder='todos select'/>
           </div>
            <div>
                <input type="text" onInput={valueChange} placeholder='todos add'/>
                <button onClick={handleAdd}>todos add</button>
            </div>
            <div>
                {
                    todosState.map((item: TodosType) =>
                        <TodoItem key={item.id} value={item.value} id={item.id as number} handleDelete={handleDelete} handleValueChange={handleUpdate}/>
                    )
                }
            </div>

        </div>
    )
}
function TodoItem(props: TodosItem) {
    const { id, value, handleValueChange, handleDelete } = props;
    const [editState, setEditState] = useState(false);
    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        handleValueChange({value, id});
        setEditState(false);
    }
    return (
        <div>
            {!editState &&  <span onDoubleClick={() => setEditState(true)}>{value}</span> }
            { editState &&  <span><input type="text" defaultValue={value} onBlur={handleItemChange}/></span> }
            <span style={{marginLeft: '5px'}}><button style={{width: '80px'}} onClick={(e) => handleDelete(id)}>delete</button></span>
        </div>
    )
}

















export default UseReducer;