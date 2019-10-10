import React, {Fragment} from 'react';
import Tip from './Tip';
import {
    Button, ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia, Grid, Paper, TextField,
    Typography
} from "@material-ui/core/es/index";

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <Grid container style={{paddingLeft:20,paddingRight:20, paddingTop:10}}>
                    <Grid item sm style={{ padding:20}}>
                        <Card>
                            <CardMedia
                                style={{height: 350}}
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
                                    <img src={this.props.author.photo.url} style={{height:30, paddingRight:10}} alt="img"/>
                                        Created by {this.props.author.username}.
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm style={{paddingTop:150}}>
                        <Typography style={{height: 120}} gutterBottom variant="h4" component="h4">
                            {this.props.question.question}
                        </Typography>
                        <TextField
                            label="Your answer"
                            style={{width: "90%", paddingBottom: 50}}
                            value={this.props.question.userAnswer || ''}
                            onChange={(e) => this.props.onQuestionAnswer(e.target.value)}
                            margin="normal"
                        />

                        <ButtonGroup variant="contained" size="small" aria-label="small contained button group"
                                     style={{textAlign: "center"}}>
                            <Button onClick={() => this.props.onChangeQuestion(-1)}
                                    disabled={this.props.disablePrev}>
                                Anterior
                            </Button>
                            <Button onClick={() => this.props.onChangeQuestion(1)}
                                    disabled={this.props.disableNext}>
                                Siguiente
                            </Button>
                            <Button onClick={() => this.props.onSubmit()}>
                                Submit
                            </Button>
                        </ButtonGroup>



                    </Grid>
                </Grid>
            </div>

        );
    }
}