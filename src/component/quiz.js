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

    render() {
        let newsData = this.state.quizQuestion.questionanswers;
        let newslist = newsData.map((news, index) => {
            return(
                <div>
                    <div className="newscol">    
                        <h3>{news.question}</h3>
                        {news.answerOptions.map(a => <div>{a.answerText}</div>)}
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