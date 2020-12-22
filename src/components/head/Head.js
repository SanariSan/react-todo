import React from 'react';
import { Title } from './Title';

export class Head extends React.Component {
    constructor(props) {
        if (props) {
            super(props);
        }

        this.state = {};
    }

    render() {
        return (
            <div>
                <Title />
            </div>
        )
    }
}