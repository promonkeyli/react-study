import ViewBox from "../component/ViewBox";
import {useState} from "react";

function UseState() {
    // initialState 也可以是函数，当初始值计算逻辑复杂时可以使用函数形式写法
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('张三');
    const handleIncrement = () => {
        setTimeout(() => {
            setCount(Number(count) + 1);
            console.log(count);
        }, 3000)
    }
    /**
     * execute order: same time 多次异步定时器会合并执行，按照setCount函数的入队顺序执行，并且修改后只会render一次
     * async one
     * async three
     * async two
     * */
   /* const handleAsyncIncrement = () => {
        setTimeout(() => {
            setCount(preState => {
                console.log('async one', preState);
                return preState + 1;
            })
        }, 1000);
        setTimeout(() => {
            setCount(preState => {
                console.log('async three', preState);
                return preState + 3;
            })
        }, 1000)
        setTimeout(() => {
            setCount(preState => {
                console.log('async two', preState);
                return preState + 2;
            })
        }, 1000);
    }*/

    /**
     * execute order: different time 不同的时间按时间升序执行，同时每次执行都会rerender ,相同时间的还是按入队顺序执行，且两次render会合并
     * async three -- time: 1000
     * async four  -- time: 1000
     * async two -- time: 2000
     * async one -- time: 3000
     * */
    const handleAsyncIncrement = () => {
        setTimeout(() => {
            setCount(preState => {
                console.log('async one', preState);
                return preState + 1;
            })
        }, 3000);
        setTimeout(() => {
            setCount(preState => {
                console.log('async three', preState);
                return preState + 3;
            })
        }, 1000)
        setTimeout(() => {
            setCount(preState => {
                console.log('async four', preState);
                return preState + 3;
            })
        }, 1000)
        setTimeout(() => {
            setCount(preState => {
                console.log('async two', preState);
                return preState + 2;
            })
        }, 2000);
    }

    const handleName = () => {
            setCount(preState => preState + 1);
            setName(prevState => {
                console.log('更新后的count？', count);
                // 修改状态的不同方法之间取用其他状态例如count只能获取旧值，取不到最新的
                return '李四'
            })
    }
    console.log('rerender');
    return (
        <>
            <ViewBox value={count}/>
            <hr/>
            <button onClick={handleIncrement}>Increment</button>
            <hr/>
            <button onClick={handleAsyncIncrement}>Increment</button>
            <hr/>
            <ViewBox value={name}/>
            <hr/>
            <button onClick={handleName}>modify name</button>

        </>
    )
}
export default UseState;