import React from 'react';
import ReduxProvider from './app/components/ReduxProvider';
import {View, Text, TouchableHighlight, Image, StyleSheet} from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {MenuProvider} from "react-native-popup-menu";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{
                flex:1,
                padding: 30,
                paddingBottom: 150,
                paddingTop: 150}}>
                <View style={styles.card}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Image style={{width: 200, height:200}} source={require('./public/reactredux.jpeg')}/>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{fontSize:30, fontWeight: "bold"}}>Quiz Game</Text>
                        <View style={{padding: 30}}>
                            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Play')}>
                                <Text style={{color: "white", fontSize: 20}}>PLAY NOW</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

class PlayScreen extends React.Component {
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                paddingTop: Expo.Constants.statusBarHeight}}>
                <MenuProvider>
                    <ReduxProvider navigation={this.props.navigation}/>
                </MenuProvider>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        },
        Play: {
            screen: PlayScreen,
            navigationOptions: {
                header: null,
            }
        },    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 8,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#abb1cf"
    }
})