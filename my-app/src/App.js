/*TodoList*/
import logo from './logo.svg';
import './App.css';
import TodoList from "./Component/TodoList";
import TodoItem from './TodoItem'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TodoList/>
    </div>
  );
}*/
import React,{Fragment,Component} from 'react';
/*在react中赋值component就不用写react.component了*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ""
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);


    }

    /*点击增加*/
    handleBtnClick() {
        this.setState({
            //改变之前的state里的list 。。。this.state包含之前的list
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''/*输入之后清空input的值*/
        });
        /* this.state.list.push("hello ,world")*/
    }

    /*点击弹出输入的值*/
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
            /*e.target.value输入的值*/
        })
    }

    /*点击删除*/
    /*handleItemClick(index){
      改state的值尽量不直接操作 复制出副本进行赋值
        let list = [...this.state.list];
        list.splice(index,1);
        this.setState({listlist:list  es6中值一样可以只写一个})
    } 点击删除 */

    /*下面是通过子组件向父组件传值然后删除内容 里面的东西和上面点击删除是一样的效果*/
    handleDelete(index) {
        console.log(index);
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list})
    }

    getTodoItems(){
        return(
                this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        delete={this.handleDelete}
                        key={index}
                        content={item}
                        index={index}
                    />
                )
                })
        )
    }

    render() {
        return (
            /*React.Fragment  如果你不想最外层包裹div的话可以写这个 react最上面赋值的话不用写react直接写fragment*/
            <Fragment>
                <div>
                    /*value的值跟着上面的值更新     增加列表项*/
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className='red-btn' onClick={this.handleBtnClick}>add</button>
                </div>
                {/*代码优化将写的都放进一个函数里*/}
                <ul>{this.getTodoItems()}</ul>
            </Fragment>

        )
    }

}

export default App;


/*{item  输入的内容
    this.state.list.map((item, index) => {
        子组件如果想要和父组件传值需要调用父组件传递过来的方法 delete就是传给子组件的值
        return (
            <TodoItem
                delete={this.handleDelete}
                key={index}
                content={item}
                index={index}/>
            react组件传参
            父组件通过属性的方式向子组件传递参数 TodoItem是子组件
            /*return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>*/

