import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 300
        }
    }

    render() {
        const {count} = this.state;
        return(
            <h5>Time left: {Math.floor(count/60)}min {count%60}s</h5>
        )
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if(this.state.count === 0) {
                this.props.onTimeout()
            }
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }
}