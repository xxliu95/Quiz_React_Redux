import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
//import { questions } from "../asserts/mock-data";
import React from 'react';
import App from '../components/App';
import Home from "../components/Home";
import {HashRouter as Router, Link, Route} from "react-router-dom";


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
                <div style={{ height: '100%' }}>
                    <Router>
                        <Route path="/" exact component={Home}/>
                        <Route path="/play" exact render={() => <App store={ this.store }/>}/>
                    </Router>
                </div>
            </Provider>

        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }

}

