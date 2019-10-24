import React from 'react';
import {Alert, StyleSheet, Text, View} from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import {AsyncStorage} from "react-native";
import {initQuestions} from "../reducers/actions";

export default class Header extends React.Component {
    render() {
        return(
            <View style={{
                flex:2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: "#abb1cf"}}>
                <View>
                    <Text style={styles.text}>QUIZ game</Text>
                </View>
                <View>
                    <Menu>
                        <MenuTrigger style={{padding: 15}}>
                            <Text style={{fontSize: 30, fontWeight: "bold", color: "white"}}>···</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption
                                onSelect={() => this._saveState()}
                            ><Text style={styles.menuOption}>Save</Text></MenuOption>
                            <MenuOption
                                onSelect={() => this._loadState()}
                            ><Text style={styles.menuOption}>Load</Text></MenuOption>
                            <MenuOption
                                onSelect={() => this._resetState()}
                            ><Text style={styles.menuOption}>Remove</Text></MenuOption>
                            <MenuOption
                                onSelect={() => this.props.navigation.navigate('Home')}
                            ><Text style={styles.menuQuit}>Quit Game</Text></MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
            </View>
        )
    }
    async _saveState() {
        try {
            var currentState = JSON.stringify(this.props.questions);
            await AsyncStorage.setItem('@P2_2019_IWEB:quiz', currentState);
            await Alert.alert('', "saved successfully");
        } catch {
            Alert.alert('Error', 'error during saving');
        }
    }

    async _loadState() {
        try {
            const storedState = await AsyncStorage.getItem('@P2_2019_IWEB:quiz');
            if (storedState != null) {
                var state = JSON.parse(storedState);
                return this.props.onInitQuestions(state);
                await Alert.alert('', "loaded successfully");
            } else {
                Alert.alert('', 'Sorry there is not saved state')
            }
        } catch {
            Alert.alert('Error', 'error during loading');
        }
    }

    async _resetState() {
        try {
            await AsyncStorage.removeItem('@P2_2019_IWEB:quiz');
            await Alert.alert('', "removed successfully");
        } catch {
            Alert.alert('Error', 'error during reseting');
        }
    }
}



const styles = StyleSheet.create({
    text: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    menuOption: {
        padding: 10,
        fontSize: 15,
    },
    menuQuit: {
        padding: 10,
        fontSize: 15,
        color: "#222222"
    }
})