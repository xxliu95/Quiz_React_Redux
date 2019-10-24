import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

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
                            <MenuOption><Text style={styles.menuOption}>Save</Text></MenuOption>
                            <MenuOption><Text style={styles.menuOption}>Load</Text></MenuOption>
                            <MenuOption><Text style={styles.menuOption}>Remove</Text></MenuOption>
                            <MenuOption
                                onSelect={() => this.props.navigation.navigate('Home')}
                            ><Text style={styles.menuQuit}>Quit Game</Text></MenuOption>
                        </MenuOptions>
                    </Menu>
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