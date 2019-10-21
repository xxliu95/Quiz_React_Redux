import React from 'react';
import {Text, TextInput, TouchableHighlight, View} from "react-native";

export default class Game extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <Text>{this.props.question.question}</Text>
                <TextInput type="text"
                       value={this.props.question.userAnswer || ''}
                       onChangeText={(e) => this.props.onQuestionAnswer(e.target.value)}/>
                <TouchableHighlight onPress={() => this.props.onChangeQuestion(-1)}
                        disabled={this.props.current === 0}>
                    <Text>Preview</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.onChangeQuestion(1)}
                        disabled={this.props.current === 9}>
                    <Text>Next</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.onSubmit()}>
                    <Text>Submit</Text>
                </TouchableHighlight>

            </View>
        );
    }
}