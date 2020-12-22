import React from 'react';

export class TodoList extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {
            tempTodoArr: []
        };
    }

    handleAdd = () => {
        this.setState({
            tempTodoArr: [...this.state.tempTodoArr, '']
        });
    }

    handleSave = () => {
        let filledTodos = [];
        this.state.tempTodoArr.forEach(el => el !== '' ? filledTodos.push(el) : null);

        this.props.handleNewTodos(filledTodos);
        this.setState({
            tempTodoArr: []
        })
    }

    render() {
        return (
            <div className="listWrap">
                <ul>
                    {this.props.todoArr.map((el, i) =>
                        <li key={`todo${i}`} className="listItem">
                            <p>
                                {/* <img src='http://forum.rcracer.ru/img/avatars/8744.jpg?no_cache=RdFadbsZ' /> */}
                                {el}
                            </p>
                        </li>)
                    }
                    {this.state.tempTodoArr.map((el, i) =>
                        <li key={`tempTodo${i}`} className="listItem">
                            <p>
                                {el}
                            </p>
                        </li>)
                    }
                </ul>
                <button name='add' onClick={this.handleAdd}>Add</button>
                <button name='save' onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}