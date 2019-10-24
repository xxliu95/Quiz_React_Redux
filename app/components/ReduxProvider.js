import { Provider } from 'react-redux';
import GlobalState from '../reducers/reducers';
import { createStore } from 'redux';
//import { questions } from "../asserts/mock-data";
import React from 'react';
import Play from "./Play";

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            //questions: [ ...questions ]
            questions: [  ]
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={ this.store }>
                <Play navigation={this.props.navigation}/>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }

}