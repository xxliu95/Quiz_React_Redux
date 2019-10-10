import { combineReducers } from 'redux';
import { QUESTION_ANSWER, SUBMIT, CHANGE_QUESTION, INIT_QUESTIONS } from "./actions";

function score(state = 0, action = {}) {
    switch(action.type) {
        case SUBMIT:
            state = 0
            action.payload.questions.map((question) => {
                if (question.userAnswer === undefined) {
                    question.userAnswer = "";
                }
                if (question.userAnswer.trim().toLowerCase() === question.answer.toLowerCase()) {
                    state++;
                }
            });
            return state;
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return true;
        case INIT_QUESTIONS:
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            return state + action.payload.inc;
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            });
        case INIT_QUESTIONS:
            state = action.payload.questions;
            return state;
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;