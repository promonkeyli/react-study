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



/*
* RTK方式的写法是目前官方推荐的方式，他需要使用两个包，react-redux reduxjs/toolkit
*  前者是react与redux沟通的桥梁，后者提供了工具供我们驱使redux去管理state
*
*
*
*
* */




import ViewBox from "../component/ViewBox";
import {useDispatch, useSelector} from "react-redux";
import {setAge, setName} from "../store/store";
// import { useDispatch, useSelector } from 'react-redux';
// import {useEffect} from "react";
// import { increment, decrement} from '../store/feature/counterSlice';
function Redux() {
    // useSelector(); 用于加载state数据
    const studentState = useSelector((state: any) => state.student); // 用于state数据的获取
    const dispatch = useDispatch(); // 获取派发器对象，同时需要导入action构建器，派发时使用
    const handleNameChange = () => {
        dispatch(setName('猪八戒')); // setName action对象传递的第一个属性，会转化为action的payload属性
    }
    const handleAgeChange = () => {
        dispatch(setAge(13))
    }
    return (
      <ViewBox>
          {/*<ReduxView/>*/}
          <div>{studentState.name}</div>
          <div>{studentState.age}</div>
          <hr/>
          <div><button onClick={handleNameChange}>name change</button></div>
          <hr/>
          <div><button onClick={handleAgeChange}>age change</button></div>
      </ViewBox>
    )
}
/*function ReduxView(props: any) {
    const dispatch = useDispatch();
    const { value } = useSelector((state: any) => state.counter)
    useEffect(() => {
    }, [])

    return (
        <>
            <div style={{textAlign: 'center'}}>redux counter</div>
            <div style={{marginTop: '20px'}}>
                <button onClick={() => dispatch(increment())} style={{width: '50px'}}>+</button>
                <span style={{display: 'inline-block', width: '50px', textAlign: 'center'}}>{value}</span>
                <button onClick={() => dispatch(decrement())} style={{width: '50px'}}>-</button>
            </div>
        </>
    )
}*/
export default Redux;
