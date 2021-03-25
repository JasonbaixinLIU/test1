import React,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        /*子组件通过props接收参数*/
        super(props);
        console.log(props);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(){

        /*点击删除   调用父组件传递过来的方法*/
        this.props.delete(this.props.index)


    }
    render(){
        let content = this.props.content;
        return(
            /*点击删除列表内容*/
            <div onClick={this.handleDelete}>{content}</div>
        )
    }

}

export default TodoItem