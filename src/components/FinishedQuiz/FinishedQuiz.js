import React from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = props => {
    return (
        <div className="FinishedQuiz">
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className= {'fa fa-times error'}/>
                </li>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className= {'fa fa-check sucsess'}/>
                </li>
            </ul>

            <p>Ghfdbkmyj 4 bp 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz