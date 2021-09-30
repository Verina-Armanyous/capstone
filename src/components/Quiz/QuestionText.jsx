import React from 'react';



/**
 * This component shows the question displayed one at a time 
 * @param {Array} questions -- This includes a list of questions where each question 
 * has the question text, answer options, and feedback 
 * @param {number} indexOfDisplayedQuestion -- the number of current question 
 * @param {boolean} showFeedback -- indicates whether to show the feedback on each question 
 */
function QuestionText({questions, indexOfDisplayedQuestion, showFeedback}) {
    if (showFeedback) {
        return (  
            <div className='question-text'>
                {questions[indexOfDisplayedQuestion].showFeedback}
            </div>)
    }
    else{
        return (
            <div className='question-text'>
                    {questions[indexOfDisplayedQuestion].showFeedback}
            </div>)

    }}

export default QuestionText;
