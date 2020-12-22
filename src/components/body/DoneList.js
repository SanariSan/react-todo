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
                                {/* <img src='http://forum.rcracer.ru/img/avatars/8744.jpg?no_cache=RdFadbsZ' /> */}
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