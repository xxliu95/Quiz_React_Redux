import React from 'react';
import Tip from './Tip';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                {this.props.question.question}
                <input type="text"
                       value={this.props.question.userAnswer || ''}
                       onChange={(e) => this.props.onQuestionAnswer(e.target.value)}/>
                <button onClick={() => this.props.onChangeQuestion(-1)}
                        disabled={this.props.disablePrev}>
                    Anterior
                </button>
                <button onClick={() => this.props.onChangeQuestion(1)}
                        disabled={this.props.disableNext}>
                    Siguiente
                </button>
                <button onClick={() => this.props.onSubmit()}>
                    Submit
                </button>

                <div>
                    <img src={this.props.author.photo.url} alt="img"/> Created by {this.props.author.username}.
                </div>
                {this.props.tips.map((tip) =>
                    <Tip tip={tip} key={tip}/>
                )}
                <img src={this.props.image}/>
            </div>
        );
    }
}