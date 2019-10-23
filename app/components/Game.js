import React from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {Alert} from "react-native";

export default class Game extends React.Component {
    _onTextInputChange(text) {
        this.props.onQuestionAnswer(text);
    }

    _showTips() {

    }

    render() {
        return (
            <KeyboardAvoidingView
                style={{flex:20, padding:20, paddingTop:30, justifyContent:'center'}}
                behavior="padding"
                keyboardVerticalOffset={20}
                enabled>
                <View style={styles.card}>
                    <View style={{flex:8, justifyContent:'center'}}>
                        <Image className="image" style={{flex:1, justifyContent:'center'}} source={{uri: this.props.image}}/>
                    </View>
                    <View style={{flex:2, justifyContent:'center'}}>
                        <Text style={styles.text}>Question number {this.props.current + 1}:</Text>
                    </View>
                    <View style={{flex:4, justifyContent:'flex-start'}}>
                        <Text style={this.props.question.question.length > 30 ? styles.questText : styles.questTextBig}>
                            {this.props.question.question}
                        </Text>
                    </View>
                    <View style={{flex:4, justifyContent:'center'}}>
                        <TextInput type="text"
                                   underlineColorAndroid="#abb1cf"
                                   placeholder="Your answer"
                                   style={styles.textInput}
                                   value={this.props.question.userAnswer || ''}
                                   onChangeText={this._onTextInputChange.bind(this)}/>
                    </View>
                </View>
                <View style={{
                    flex:2,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.onChangeQuestion(-1)}
                                        disabled={this.props.current === 0}>
                        <Text>Previous</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonSubmit}
                                        onPress={() => this.props.onSubmit()}>
                        <Text style={{color: "white"}}>Submit</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.onChangeQuestion(1)}
                                        disabled={this.props.current === 9}>
                        <Text>Next</Text>
                    </TouchableHighlight>

                </View>
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{flex:3, flexDirection: 'row'}}>
                        <Image style={{ width: 20, height:20, borderRadius:2}} source={{uri: this.props.author.photo.url}}/>
                        <Text style={{ padding: 6, fontSize: 10}}>Created by {this.props.author.username}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableHighlight onPress={() => {
                            let alltips = "";
                            if (this.props.tips.length === 0) {
                                Alert.alert(
                                    'Tips',
                                    'Sorry, there is no tips'
                                )
                            } else {
                                this.props.tips.map( tip => {
                                    alltips += "- " + tip + "\n"
                                })
                                Alert.alert(
                                    'Tips',
                                    alltips
                                )
                            }
                        }
                        }>
                            <Text style={{color: "#777777"}}>Need help?</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 8,
        flex:10,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'stretch'
    },
    text: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    questText: {
        padding: 10,
        fontSize: 18
    },
    questTextBig: {
        padding: 10,
        fontSize: 25
    },
    textInput: {
        padding: 10
    },
    buttonSubmit: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#abb1cf"
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#EEEEEE"
    }
})