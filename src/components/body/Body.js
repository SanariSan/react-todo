import React from 'react';
import { DoneList } from './DoneList';
import { TodoList } from './TodoList';

export class Body extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {};
    }

    render() {
        return (
            <div>
                <DoneList />
                <TodoList />
            </div>
        )
    }
}