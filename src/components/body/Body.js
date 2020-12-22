import React from 'react';
import { Stats } from './Stats';
import { DoneList } from './DoneList';
import { TodoList } from './TodoList';
import './Body.css'

export class Body extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {
            todoArr: [`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh 
            euismod tincidunt`, `ut lacreet dolore magna aliguam erat volutpat. Ut wisis enim 
            ad minim veniam, quis nostrud`, `task3`, `exerci tution ullamcorper suscipit lobortis nisl 
            ut aliquip ex ea commodo consequat.`],
            doneArr: [`Ut wisis enim ad minim veniam, quis nostrud`, `task2`,]
        };
    }

    handleAddItems = (newItems) => {
        this.setState({
            todoArr: [...this.state.todoArr, ...newItems]
        })
    }

    handleDelItem = (id, origin) => {
        let newArr = null;

        if (origin === 'todoList') {
            newArr = this.state.todoArr;
            newArr.splice(id, 1);

            this.setState({
                todoArr: newArr
            })
        }
        else if (origin === 'doneList') {
            newArr = this.state.doneArr;
            newArr.splice(id, 1);

            this.setState({
                doneArr: newArr
            })
        }
    }

    handleMoveItem = (i, origin) => {
        if (origin === 'todoList') {
            let newItem = this.state.todoArr[i];
            this.setState({
                doneArr: [...this.state.doneArr, newItem]
            })
        }
        else if (origin === 'doneList') {
            let newItem = this.state.doneArr[i];
            this.setState({
                todoArr: [...this.state.todoArr, newItem]
            })
        }

        this.handleDelItem(i, origin);
    }

    render() {
        return (
            <div>
                <Stats
                    todoArr={this.state.todoArr}
                    doneArr={this.state.doneArr} />
                <div className='listsWrap'>
                    <TodoList
                        todoArr={this.state.todoArr}
                        doneArr={this.state.doneArr}
                        handleAddItems={this.handleAddItems}
                        handleDelItem={this.handleDelItem}
                        handleMoveItem={this.handleMoveItem} />
                    <DoneList
                        todoArr={this.state.todoArr}
                        doneArr={this.state.doneArr}
                        handleAddItems={this.handleAddItems}
                        handleDelItem={this.handleDelItem}
                        handleMoveItem={this.handleMoveItem} />
                </div>
            </div>
        )
    }
}