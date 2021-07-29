import React from 'react';

export default function Score({numberOfCorrectAnswers, totalNumberOfQuestions}) {
    return (
        <div className='score-section'>
            You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}
        </div>
    )
}