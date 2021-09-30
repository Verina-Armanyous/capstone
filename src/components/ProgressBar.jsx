import React from 'react';

/**
 * This component represents the progress bar that shows the progress throughout the game 
 * @param {number} indexOfDisplayedQuestion indicates the index of the current question 
 * @param {number} totalNumberOfQuestions indicates the total number of questions in the database
 */
function ProgressBar({indexOfDisplayedQuestion, totalNumberOfQuestions}) {
    return (
        <div className='progress-bar'>
            <Filler indexOfDisplayedQuestion = {indexOfDisplayedQuestion} totalNumberOfQuestions = {totalNumberOfQuestions}/>
            {}
        </div>
    )
}

// This shows the inner part of the progress bar
const Filler = ({indexOfDisplayedQuestion, totalNumberOfQuestions}) => {
    const percentage = (indexOfDisplayedQuestion/totalNumberOfQuestions) * 100; 
    return(
        <div className="filler" style={{width: `${percentage}%`}}>
        </div>
        
    );
}

export default ProgressBar;