import React from 'react';

export class TodoList extends React.Component {
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
                    {this.props.todoArr.map((el, i) =>
                        <li key={`todo${i}`} className="listItem">
                            <p>
                                {/* <img src='http://forum.rcracer.ru/img/avatars/8744.jpg?no_cache=RdFadbsZ' /> */}
                                {el}
                            </p>
                        </li>)
                    }
                </ul>
                <button name='add'>Add</button>
                <button name='save'>Save</button>
            </div>
        )
    }
}