import React from 'react';
import {AppBar, Toolbar} from "@material-ui/core/";

export default class Header extends React.Component {
    render() {
        // Un icono estaria bien
        return(
            <AppBar position="static" >
                <Toolbar style={{backgroundColor: "#abb1cf"}}>
                    <h3>QUIZ game</h3>
                </Toolbar>
            </AppBar>
        )
    }
}