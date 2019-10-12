import React, {Fragment} from 'react';
import Tip from './Tip';
import Timer from './Timer'
import {
    Button, ButtonGroup,
    Card,
    CardContent,
    CardMedia, Grid, TextField,
    Typography
} from "@material-ui/core/es/index";

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <Grid container style={{paddingLeft:20,paddingRight:20, paddingTop:30}}>
                    <Grid item sm style={{ padding:20}}>
                        <Card>
                            <CardMedia
                                style={{height: 300}}
                                image={this.props.image}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" component="h4">
                                    Question number {this.props.num + 1}:
                                </Typography>

                                <Typography variant="body2" color="textSecondary">
                                    Tips:
                                    {
                                        this.props.tips.length === 0 ? <Tip tip="There is no tips"/> :
                                            this.props.tips.map((tip) =>
                                                <Tip tip={tip} key={tip}/>
                                            )}
                                </Typography>
                                <div style={{ textAlign: "left", fontSize: "small"}}>
                                    <img src={this.props.author.photo.url === null ? {} : this.props.author.photo.url}
                                         style={{height:30, paddingRight:10}} alt="img"/>
                                        Created by {this.props.author.username}.
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm>
                        <Typography style={{height: 120, paddingTop:100}} gutterBottom variant="h4" component="h4">
                            {this.props.question.question}
                        </Typography>
                        <TextField
                            label="Your answer"
                            style={{width: "90%", paddingBottom: 50}}
                            value={this.props.question.userAnswer || ''}
                            onChange={(e) => this.props.onQuestionAnswer(e.target.value)}
                            margin="normal"
                        />
                        <Button
                            style={{ color:"white", backgroundColor: "#abb1cf", marginBottom: 50 }}
                            onClick={() => this.props.onSubmit()}>
                            Finish the test
                        </Button>
                        <Timer onTimeout={() => this.props.onSubmit()}/>

                    </Grid>
                </Grid>
            </div>
        );
    }
}