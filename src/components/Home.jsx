import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core/es/index";

export default class Home extends React.Component {
    render() {
        return(
            <div className="App">
                <Header/>
                <div style={{padding: 20}}>
                    <Link to="/play">
                        <Button variant="contained" color="#abb1cf">
                            PLAY NOW
                        </Button>
                    </Link>
                </div>
                <Footer/>
            </div>
        )
    }
}