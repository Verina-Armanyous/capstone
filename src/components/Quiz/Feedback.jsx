import React from 'react';

/**
 * This component shows the feedback associated with each question 
 * @param {Array} questions - This includes a list of questions where each question 
 * has the question text, answer options, and feedback 
 * @param {number} indexOfDisplayedQuestion - the number of current question  
 */
function Feedback({questions, indexOfDisplayedQuestion}) {
    return (  
        <div className='rectangle-speech-border'>
            {questions[indexOfDisplayedQuestion].feedback}
        </div>)
        }

export default Feedback;