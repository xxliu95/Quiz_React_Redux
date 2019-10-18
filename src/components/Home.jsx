import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {Button, Paper, Typography} from "@material-ui/core/es/index";

export default class Home extends React.Component {
    render() {
        return(
            <div className="App">
                <div style={{padding: 40}}>
                    <Paper>
                        <img src="reactredux.jpeg" style={{width: 350 }} alt=""/>
                        <Typography variant="h1" component="h2">
                            QUIZ GAME
                        </Typography>
                        <div style={{padding: 50}}>
                            <Link to="/play" style={{ textDecoration: 'none'}}>
                                <Button style={{backgroundColor: "#abb1cf"}}>
                                    <Typography style={{padding:5, color: "white"}} variant="h5" component="h5">
                                        PLAY NOW
                                    </Typography>
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </div>
                <Footer/>
            </div>
        )
    }
}