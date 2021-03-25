import React from 'react';

class TodoList extends React.Component{
    handleBtnClick(){

        alert('click');
    }
    render() {
        return (
            <div>
                <div>
                    <input/>
                    <button onClick={this.handleBtnClick}>add</button>
                    <ul>
                        <li>learn react</li>
                        <li>learn english</li>
                    </ul>
                </div>
            </div>

        )
    }

}

export default TodoList