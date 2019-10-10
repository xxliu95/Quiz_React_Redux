import React from 'react';

export default class Tip extends React.Component {
    render() {
        return(
            <h5>{this.props.tip}</h5>
        )
    }
}