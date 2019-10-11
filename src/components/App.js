import React from 'react';
import { connect } from 'react-redux';
import {changeQuestion, initQuestions, questionAnswer, submit} from "../redux/actions";
import Game from './Game';
import Bar from './Bar';
import '../App.css';
import 'typeface-roboto';
import Header from './Header';
import Footer from "./Footer";
import {
    Button, Card, CardContent, Grid,
    LinearProgress,
} from "@material-ui/core/es/index";

let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=8606ca3284a0e9615d99";
let noimage = "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";


class App extends React.Component {

    componentDidMount() {
        this.initReset();
    }

    initReset() {
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
                        <LinearProgress/>
                    </div>
                    <Footer/>
                </div>
            );
        }

        if(this.props.finished) {
            let msg = "Try again next time!";
            if( this.props.score > 4 && this.props.score < 7 )
                msg = "Good job!"
            else if ( this.props.score >= 7 )
                msg = "Excelent!"
            return (
                <div className="App">
                    <Header/>
                    <Grid style={{padding: 70, paddingLeft:250, paddingRight:250}}>
                        <Card>
                            <CardContent>
                                <h2>Your Score: {this.props.score}</h2>
                                <h3>{msg}</h3>
                                <Button onClick={() => this.initReset()}>
                                    PLAY AGAIN
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
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
                              this.props.dispatch(submit(this.props.questions));
                          }}>
                    </Game>
                    <Bar current={this.props.currentQuestion}
                         onChangeQuestion={(inc) => {
                            this.props.dispatch(changeQuestion(this.props.currentQuestion, inc))
                    }}/>
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
