import React from 'react';
import ReduxProvider from './app/components/ReduxProvider';
import {View} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                paddingTop: Expo.Constants.statusBarHeight}}>
                <ReduxProvider/>
            </View>
        )
    }
}
