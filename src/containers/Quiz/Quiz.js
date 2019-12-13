import React from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
    state = {
        quiz:[

        ]
    }
    render(){
        return(
            <div className="Quiz">
                <div className="Quiz-Wrapper">
                    <h1>Quiz</h1>
                    <ActiveQuiz></ActiveQuiz>
                </div>
                
            </div>
        )
    }
}

export default Quiz