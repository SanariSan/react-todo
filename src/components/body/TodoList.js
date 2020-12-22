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

    handleClick = (event, i) => {

        if (event.button === 0) {
            console.log(`Task ${i} is done!`);
            //this.props.handleDoneTodo(i);
        }
        else if (event.button === 2) {
            console.log(`Task ${i} deleted!`);
            this.props.handleDelTodos(i);
        }

    }

    handleInput = (event) => {
        let tempTodoArr = this.state.tempTodoArr;
        tempTodoArr[event.target.name] = event.target.value;

        this.setState({
            tempTodoArr
        })
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
                    {
                        this.props.todoArr.map((el, i) =>
                            <li key={`todo${i}`} className="listItem">
                                <p onMouseDown={(event) => this.handleClick(event, i)}>{el}</p>
                            </li>)
                    }
                    {
                        this.state.tempTodoArr.map((el, i) =>
                            <li key={`tempTodo${i}`} className="listItem">
                                <textarea name={i} onChange={this.handleInput} value={el}>
                                </textarea>
                            </li>)
                    }
                </ul>
                <button name='add' onClick={this.handleAdd}>Add</button>
                <button name='save' onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}