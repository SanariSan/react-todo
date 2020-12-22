import React from 'react';

export class TodoList extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.origin = 'todoList';

        this.state = {
            tempItemsArr: []
        };
    }

    handleClick = (event, i) => {

        if (event.button === 0) {
            console.log(`Item ${i} sent to 'Done' list!`);
            this.props.handleMoveItem(i, this.origin);
        }
        else if (event.button === 2) {
            console.log(`Item ${i} deleted from 'todo' list!`);
            this.props.handleDelItem(i, this.origin);
        }
    }

    handleInput = (event) => {
        let tempItemsArr = this.state.tempItemsArr;
        tempItemsArr[event.target.name] = event.target.value;

        this.setState({
            tempItemsArr
        })
    }

    handleAdd = () => {
        this.setState({
            tempItemsArr: [...this.state.tempItemsArr, '']
        });
    }

    handleSave = () => {
        let filledTodos = [];
        this.state.tempItemsArr.forEach(el => el !== '' ? filledTodos.push(el) : null);

        this.props.handleAddItems(filledTodos);
        this.setState({
            tempItemsArr: []
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
                        this.state.tempItemsArr.map((el, i) =>
                            <li key={`tempTodo${i}`} className="listItem">
                                <textarea name={i} onChange={this.handleInput} value={el}>
                                </textarea>
                            </li>)
                    }
                </ul>
                <button name='add' onClick={this.handleAdd}>Add</button>
                {this.state.tempItemsArr.length ? <button name='save' onClick={this.handleSave}>Save</button> : null}
            </div>
        )
    }
}