import React from 'react';
import { connect } from 'react-redux';
import {changeQuestion, initQuestions, questionAnswer, submit} from "../reducers/actions";
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

import {Text, TouchableHighlight, View} from "react-native";

let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=8606ca3284a0e9615d99";
let noimage = "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";


class Play extends React.Component {

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
                <View style={{flex:1, justifyContent:'center'}}>
                    <Header/>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <Text>Loading...</Text>
                    </View>
                    <Footer/>
                </View>
            );
        }

        if(this.props.finished) {
            let msg = "Try again next time!";
            if( this.props.score > 4 && this.props.score < 7 )
                msg = "Good job!"
            else if ( this.props.score >= 7 )
                msg = "Excelent!"
            return (
                <View style={{flex:1, justifyContent:'center'}}>
                    <Header/>
                    <Text>Your Score: {this.props.score}</Text>
                    <Text>{msg}</Text>
                    <TouchableHighlight onPress={() => this.initReset()}>
                        <Text>PLAY AGAIN</Text>
                    </TouchableHighlight>

                </View>
            );
        } else {
            return (
                <View style={{flex:1, justifyContent:'center'}}>
                    <Header/>
                    <Game num={this.props.currentQuestion}
                          question={this.props.questions[this.props.currentQuestion]}

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
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(Play);
