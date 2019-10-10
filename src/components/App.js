import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {changeQuestion, initQuestions, questionAnswer, submit} from "../redux/actions";
import Game from './Game';
import '../App.css';
import 'typeface-roboto';
import Header from './Header';
import Footer from "./Footer";
import {LinearProgress} from "@material-ui/core/es/index";


let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=8606ca3284a0e9615d99";
let noimage = "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";

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
                <div className="App">
                    <Header/>
                    <div style={{padding: 20}}>
                        <p>
                            Loading...
                        </p>
                        <LinearProgress />
                    </div>
                    <Footer/>
                </div> //aquí meter un spinner mientras carga
            );
        }

        if(this.props.finished) {
            return (
                <div className="App">
                    <Header/>
                    Your Score: {this.props.score}
                    <Footer/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Header/>
                    <Game num={this.props.currentQuestion}
                          question={this.props.questions[this.props.currentQuestion]}
                          image={this.props.questions[this.props.currentQuestion].attachment === null ?
                                noimage : this.props.questions[this.props.currentQuestion].attachment.url}
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
