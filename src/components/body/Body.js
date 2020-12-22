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

    handleNewTodos = (newTodos) => {
        this.setState({
            todoArr: [...this.state.todoArr, ...newTodos]
        })
    }

    handleDelTodos = (id) => {
        let todoArr = this.state.todoArr;
        todoArr.splice(id, 1);

        this.setState({
            todoArr
        })
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
                        handleNewTodos={this.handleNewTodos}
                        handleDelTodos={this.handleDelTodos} />
                    <DoneList
                        todoArr={this.state.todoArr}
                        doneArr={this.state.doneArr}
                        handleNewTodos={this.handleNewTodos}
                        handleDelTodos={this.handleDelTodos} />
                </div>
            </div>
        )
    }
}