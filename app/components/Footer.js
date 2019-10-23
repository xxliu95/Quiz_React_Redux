import React from 'react';
import {Text, View} from "react-native";

export default class Footer extends React.Component {
    render() {
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{textAlign: 'center'}}>Xinxin Liu</Text>
            </View>
        )
    }
}