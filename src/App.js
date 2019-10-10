import React from 'react';
import { connect } from 'react-redux';
import {changeQuestion, initQuestions, questionAnswer, submit} from "./redux/actions";
import Game from './Game';
import './App.css';

let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=8606ca3284a0e9615d99";

class App extends React.Component {

    componentDidMount() {
        fetch(url)
            .then( res => res.json())
            .then( data => {
                return this.props.dispatch(initQuestions(data));
            })
    }

    render() {
        console.log(this.props);

        if(this.props.questions.length === 0) {
            return (
                <div>Cargando</div>
            );
        }

        if(this.props.finished) {
            return (
                <div className="App">
                    Your Score: {this.props.score}
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Game question={this.props.questions[this.props.currentQuestion]}
                          image={this.props.questions[this.props.currentQuestion].attachment.url}
                          tips={this.props.questions[this.props.currentQuestion].tips}
                          author={this.props.questions[this.props.currentQuestion].author}

                          disableNext={this.props.currentQuestion === this.props.questions.length - 1}
                          disablePrev={this.props.currentQuestion === 0}
                          onQuestionAnswer={(answer) => {
                              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                          }}
                          onChangeQuestion={(inc) => {
                              this.props.dispatch(changeQuestion(this.props.currentQuestion, inc))
                          }}
                          onSubmit={() => {
                              this.props.dispatch(submit(this.props.questions))
                          }}>
                    </Game>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}



export default connect(mapStateToProps)(App);
