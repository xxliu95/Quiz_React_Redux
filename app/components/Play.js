import React from 'react';
import { connect } from 'react-redux';
import {changeQuestion, initQuestions, questionAnswer, submit} from "../reducers/actions";
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

import {Text, TouchableHighlight, View, StyleSheet, ActivityIndicator} from "react-native";

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
        if(this.props.questions.length === 0) {
            return (
                <View style={{
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <ActivityIndicator size="large" color="#abb1cf" />
                        <Text style={{padding:10}}>Loading...</Text>
                    </View>
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
                    <View style={{
                        flex:19,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Your Score: {this.props.score}</Text>
                        <Text style={{fontSize: 20}}>{msg}</Text>
                        <TouchableHighlight style={styles.button} onPress={() => this.initReset()}>
                            <Text style={{color: "white", fontSize: 17}}>PLAY AGAIN</Text>
                        </TouchableHighlight>
                    </View>
                    <Footer/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, justifyContent:'center'}}>
                    <Header
                        navigation={this.props.navigation}
                        questions={this.props.questions}
                        onInitQuestions={(state) => {
                            this.props.dispatch(initQuestions(state))
                        }}
                    />
                    <Game current={this.props.currentQuestion}
                          question={this.props.questions[this.props.currentQuestion]}
                          image={this.props.questions[this.props.currentQuestion].attachment === null ?
                              noimage : this.props.questions[this.props.currentQuestion].attachment.url}
                          author={this.props.questions[this.props.currentQuestion].author}
                          tips={this.props.questions[this.props.currentQuestion].tips}

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

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#abb1cf"
    }
})