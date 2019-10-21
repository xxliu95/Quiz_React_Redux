import React from 'react';
import {Text, View} from "react-native";

export default class Header extends React.Component {
    render() {
        return(
            <View style={{backgroundColor: "#abb1cf"}}>
                <Text>QUIZ game</Text>
            </View>
        )
    }
}