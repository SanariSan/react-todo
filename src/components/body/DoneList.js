import React from 'react';

export class DoneList extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {};
    }

    render() {
        return (
            <div className="listWrap">
                <ul>
                    {this.props.doneArr.map((el, i) =>
                        <li key={`todo${i}`} className="listItem">
                            <p>
                                {el}
                            </p>
                        </li>)
                    }
                </ul>
                <button name='delete'>Delete</button>
            </div>
        )
    }
}