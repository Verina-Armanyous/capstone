import React from 'react';


/**
 * This component shows the final score of the user 
 * @param {number} numberOfCorrectAnswers the number of questions answered correctly by the user 
 * @param {number} totalNumberOfQuestions total number of questions in tthe database 
 */
function Score({numberOfCorrectAnswers, totalNumberOfQuestions}) {
    return (
        <div className='score-section'>
            You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}
        </div>
    )
}

export default Score;