import React from 'react';
import { Button } from 'semantic-ui-react'
import HomepageLayout from './HomepageLayout';

export default class Root extends React.Component {
    // constructor() {
    //     super();
    //     //this.state = defaultStateObject('displayHomeForm', '');
    //     //this.onChange = this.onChange.bind(this);
    // }
    //
    // onChange(state) {
    //     this.setState(state);
    // }

    render() {
        return (
            <div>
                <HomepageLayout/>
            </div>
        );
    }
}