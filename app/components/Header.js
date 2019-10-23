import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Header extends React.Component {
    render() {
        return(
            <View style={{
                flex:2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#abb1cf"}}>
                <View style={{
                    flex:1
                }}>
                    <Text style={styles.text}>QUIZ game</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})