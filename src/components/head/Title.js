import React from 'react';

export class Title extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>
                    TODO APP
                </h1>
            </div>
        )
    }
}