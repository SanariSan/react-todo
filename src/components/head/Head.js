import React from 'react';
import { Stats } from './Stats';
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
                <Stats />
                <Title />
            </div>
        )
    }
}