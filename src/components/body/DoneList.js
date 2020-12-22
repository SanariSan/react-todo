import React from 'react';

export class DoneList extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.origin = 'doneList';
        this.state = {};
    }

    handleClick = (event, i) => {

        if (event.button === 0) {
            console.log(`Item ${i} sent back to 'todo' list!`);
            this.props.handleMoveItem(i, this.origin);
        }
        else if (event.button === 2) {
            console.log(`Item ${i} deleted from 'done' list!`);
            this.props.handleDelItem(i, this.origin);
        }
    }

    handleDelete = (event, i) => {
        let max = this.props.doneArr.length;

        for (let i = 0; i < max; i++) {
            this.props.handleDelItem(0, this.origin);
        }
    }

    render() {
        return (
            <div className="listWrap">
                <ul>
                    {
                        this.props.doneArr.map((el, i) =>
                            <li key={`todo${i}`} className="listItem">
                                <p onMouseDown={(event) => this.handleClick(event, i)}>{el}</p>
                            </li>)
                    }
                </ul>
                {this.props.doneArr.length ? <button name='delete' onClick={this.handleDelete}>Delete</button> : null}
            </div>
        )
    }
}