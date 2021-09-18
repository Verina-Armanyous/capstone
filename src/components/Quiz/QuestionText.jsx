import React from 'react';
import {questions} from './questions'
function QuestionText({indexOfDisplayedQuestion, feedback}) {
    if (feedback) {
        return (  
            <div className='question-text'>
                {questions[indexOfDisplayedQuestion].feedback}
            </div>)
    }
    else{
        return (
            <div className='question-text'>
                    {questions[indexOfDisplayedQuestion].questionText}
            </div>)

    }}

export default QuestionText;
