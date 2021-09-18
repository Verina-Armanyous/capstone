import React from 'react';
import {questions} from './questions'

function AnswerSection(props) {
    
    return (
        <div className='answer-section'>
            {questions[props.indexOfDisplayedQuestion].answerOptions.map((answerOption) => {
                const bgColor = props.displayAnswers ?  answerOption.isCorrect === true? "bg-correct" : "bg-incorrect": "bg-regular";
            return ( 
            <button className = {`${bgColor} answer-button`} onClick={() => props.handleAnswerButton(answerOption.isCorrect)} key={answerOption.key}>{answerOption.answerText}</button>
            )})}
        </div>
    );
}

export default AnswerSection;