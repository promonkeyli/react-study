import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux' // 引入react-redux 中的生产store的元素
// import store from "./store/store";
import {action, observable} from "mobx"; // 引入redux store
import { observer } from 'mobx-react-lite';
import ViewBox from "./component/ViewBox"; // observer装饰器/函数连接react与mobx响应式数据的桥梁


/*ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
)*/






// 1、初始化mobx容器仓库
class Store {
    @observable count = 0; // observable 常见的数组/字符串/对象都可以使用observable包装
    @action.bound increment () {
        this.count ++;
    }
}
// mobx类实例化
const store = new Store();

// 2、在组件中使用mobx容器状态
const Index =  observer<any>(({store: any})  => {
    const increment = () => {
        console.log(store);
    }
    return (
        <div style={{width: '100vw', height: '100vh', display: 'grid', placeContent: 'center'}}>
            {/*<div style={{textAlign: 'center'}}>{ count }</div>*/}
            <ViewBox value={store.count}/>
            <div>
                <button onClick={increment}>increment</button>
            </div>

        </div>
    )
})

// class 组件使用observer装饰器包装类
/*class Index extends Component<any, any>{
    increment(){
        console.log(123);
        console.log(this.props);
    }
    render(){
        return (
            <div style={{width: '100vw', height: '100vh', display: 'grid', placeContent: 'center'}}>
                <div>
                    <ViewBox value={this.props.count}/>
                </div>
                <div style={{marginTop: '10px'}}>
                    <button onClick={this.increment}>increment</button>
                </div>
            </div>
        )
    }
}*/
// 3、在组件中发起 action 修改容器状态

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <Index store={store}/>
    </Router>
)
