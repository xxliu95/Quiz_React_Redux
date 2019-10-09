import React from 'react';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                {this.props.question.question}
                <input type="text"
                       value={this.props.question.userAnswer || ''}
                       onChange={(e) => this.props.onQuestionAnswer(e.target.value)}/>
                <button onClick={() => this.props.onChangeQuestion()}>
                    Siguiente
                </button>
            </div>
        );
    }
}