import React from 'react';


/**
 * This component shows a set of possible answers that includes one correct answer
 * @param {Array} questions This includes a list of questions where each question 
 * has the question text, answer options, and feedback 
 * @param {number} indexOfDisplayedQuestion
 * @param {boolean} displayAnswers Indicates whether to reveal the correct answer 
 * @param {Function} handleAnswerButton  takes a boolean value to increase the score of user based on whether 
 * they chose the correct answer 
 }}
 */
function AnswerSection({questions, indexOfDisplayedQuestion, displayAnswers, handleAnswerButton}) {
    
    return (
        <div className='answer-section'>
            {questions[indexOfDisplayedQuestion].answerOptions.map((answerOption) => {
                const bgColor = displayAnswers ?  answerOption.isCorrect === true? "bg-correct" : "bg-incorrect": "bg-regular";
            return ( 
            <button className = {`${bgColor} answer-button`} onClick={() => handleAnswerButton(answerOption.isCorrect)} key={answerOption.key}>{answerOption.answerText}</button>
            )})}
        </div>
    );
}

export default AnswerSection;