import React from 'react';
import {Button, ButtonGroup, Grid} from "@material-ui/core/es/index";

export default class Bar extends React.Component {
    render() {
        const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return(
            <div>
                <Grid item xs={12} md={6}>
                    <ButtonGroup fullWidth aria-label="full width outlined button group">
                        {pages.map((index) => {
                            return (
                                <Button onClick={() => this.props.onChangeQuestion(index-this.props.current-1)}>
                                    {index}
                                </Button>

                            )
                        })}
                    </ButtonGroup>
                </Grid>
            </div>
        )
    }
}