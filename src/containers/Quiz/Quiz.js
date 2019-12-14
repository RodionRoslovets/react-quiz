import React from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {
    state = {
        quiz:[
            {
                question:'Какого цвета небо?',
                rightAnswerId:2,
                answers:[
                    {text:'Черный', id:1},
                    {text:'Синий', id:2},
                    {text:'Красный', id:3},
                    {text:'Зеленый', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) =>{
        console.log(answerId === this.state.quiz[0].rightAnswerId ? 'Верно' : 'Неверно');
    }

    render(){
        return(
            <div className="Quiz">
                <div className="Quiz-Wrapper">
                    <h1>Ответьте на вопросы</h1>
                    <ActiveQuiz 
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                    >                        
                    </ActiveQuiz>
                </div>
                
            </div>
        )
    }
}

export default Quiz