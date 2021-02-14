import React, { Component } from 'react';
import QUIZQA from '../json/quizQA.json';

class Quiz extends Component {
    constructor(){
        super();
        this.state = {
            quizQuestion: QUIZQA,
            filterque: []
        }
    }

    handleInput = () => {
        let newsData = this.state.quizQuestion.questionanswers;
        newsData.map(({question, answerOptions}) => {
        {<h3>{question}</h3>}
        answerOptions.map(ans => {if(ans.isCorrect === "true") {console.log("yo")} else{console.log("no")}})
        });
    }

    render() {
        let newsData = this.state.quizQuestion.questionanswers;
        let newslist = newsData.map(({question, answerOptions, questionId}) => {
            return(
                <div>
                    <div className="newscol">    
                        <h3 key={questionId} >{question}</h3>
                        {
                            answerOptions.map(a =><button onClick={this.handleInput}>{a.answerText}</button>)
                        }
                    </div>
                </div>
            )
        });
        return (
            <div>
                {newslist}
            </div>
          );
    }

}

export default Quiz;