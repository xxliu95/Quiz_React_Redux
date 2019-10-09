import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeQuestion, questionAnswer} from "./redux/actions";
import Game from './Game';
import './App.css';

function App(props) {
    console.log(props);
    return (
        <div className="App">
            <Game question={props.questions[props.currentQuestion]}
                onQuestionAnswer={(answer) => {
                    props.dispatch(questionAnswer(props.currentQuestion, answer))
                }}
                onChangeQuestion={() => {
                    props.dispatch(changeQuestion(props.currentQuestion))
                }}>
            </Game>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(App);
