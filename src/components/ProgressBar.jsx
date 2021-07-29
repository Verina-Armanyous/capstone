import React from 'react';

export default function ProgressBar({indexOfDisplayedQuestion, totalNumberOfQuestions}) {
    return (
        <div className='progress-bar'>
            <Filler indexOfDisplayedQuestion = {indexOfDisplayedQuestion} totalNumberOfQuestions = {totalNumberOfQuestions}/>
            {}
        </div>
    )
}

const Filler = ({indexOfDisplayedQuestion, totalNumberOfQuestions}) => {
    const percentage = (indexOfDisplayedQuestion/totalNumberOfQuestions) * 100; 
    return(
        <div className="filler" style={{width: `${percentage}%`}}>
        </div>
        
    );
}