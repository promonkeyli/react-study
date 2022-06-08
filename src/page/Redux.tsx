/**
 * 1、redux在react中，用到：react-redux redux reduxJs/toolkit
 * react-redux：react-redux作为react和redux的粘合剂,可完成状态的订阅与更新。 这部分涉及的核心功能点有三个:provider,context,connect
 * redux：redux core
 * reduxJs/toolkit(简称：RTK)：官方推荐的编写 Redux 逻辑的方法 ,简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序更加容易
 *                  install: pnpm install @reduxjs/toolkit
 *目前官方推荐RTK方式
 *
 * redux中，严格遵循单向数据流，和react Immutable data，修改数据必须经过特定的action dispatch派发的方式去修改state，进而通知subscribe方state的更改
 * 触发react setState的调用，视图同时响应状态的更改，store可以被订阅，也可以直接获取store中的数据，但是不能直接修改
 *
 * reducer是action行为响应state的处理函数，可以有很多个，reducer官方提倡pure function
 *
 *
 * */

import ViewBox from "../component/ViewBox";
import {useContext} from "react";

function Redux() {
    const handleIncrement = () => {
        console.log('+');
    }
    const handleDecrement = () => {
        console.log('-');
    }
    return (
        <>
          <ViewBox>
              <ReduxView handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
          </ViewBox>
        </>
    )
}
function ReduxView(props: any) {
    const {handleIncrement, handleDecrement} = props;
    return (
        <>
            <div style={{textAlign: 'center'}}>redux counter</div>
            <div style={{marginTop: '20px'}}>
                <button onClick={handleIncrement} style={{width: '50px'}}>+</button>
                <span style={{display: 'inline-block', width: '50px', textAlign: 'center'}}>{0}</span>
                <button onClick={handleDecrement} style={{width: '50px'}}>-</button>
            </div>
        </>
    )
}
export default Redux;
