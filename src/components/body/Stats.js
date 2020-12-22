import React from 'react';

export class Stats extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {};
    }

    render() {
        return (
            <div className="statsWrap">
                <div className='stats'><p>Todos now: {this.props.todoArr.length}</p></div>
                <div className='stats'><p>Todos done: {this.props.doneArr.length}</p></div>
            </div>
        )
    }
}