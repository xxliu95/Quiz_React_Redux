import React from 'react';
import ReduxProvider from './app/components/ReduxProvider';

export default class App extends React.Component {
    render() {
        return (
            <ReduxProvider/>
        )
    }
}
