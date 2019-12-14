import React from 'react';
import './FinishedQuiz.css';
import Button from '../UI/Button/Button';

const FinishedQuiz = props => {
    const sucsessCount = Object.keys(props.results).reduce((total, key)=>{
        if(props.results[key] === 'sucsess'){
            total++
        }
        return total
    }, 0)
    return (
        
        <div className="FinishedQuiz">
            <ul>{console.log(props.quiz)}
                {props.quiz.map((quizItem, index)=>{
                    const classes=['fa',
                     props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check sucsess'
                    ]
                    
                    return(
                        <li key={index}>
                            <strong>{index+1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={classes.join(' ')}></i>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {sucsessCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="sucsess">Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz