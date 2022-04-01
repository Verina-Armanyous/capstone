import React, {useState} from 'react';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
/**
 * This component shows a set of possible answers that includes one correct answer
 * @param {Array} questions - This includes a list of questions where each question 
 * has the question text, answer options, and feedback 
 * @param {number} indexOfDisplayedQuestion - represents the index of the question 
 * @param {boolean} displayAnswers - Indicates whether to reveal the correct answer 
 * @param {Function} handleAnswerButton  - takes a boolean value to increase the score of user based on whether 
 * they chose the correct answer 
 }}
 */
function Answer({questions, indexOfDisplayedQuestion, displayAnswers, handleAnswerButton}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const getClass = (answerOption) => {
        if (!displayAnswers){
            return ["bg-regular answer-button", "none"]
        }
        if (answerOption.answerText.toString()===selectedAnswer){
            if (answerOption.isCorrect){
                return ['bg-selected-correct answer-button', 'tick']
                
            }
            else{
                return ['bg-selected-incorrect answer-button', 'cross']
                
            }
        }
        if (answerOption.isCorrect) {
            return ["bg-correct answer-button", 'tick']
        } else{
            return  ["bg-regular answer-button", 'none']
        }

    }

    const handleAnswerButtonWrapper = (isCorrect, e) => {
        setSelectedAnswer(e.target.textContent)
        handleAnswerButton(isCorrect);
        
    }
    return (
        <div className='answer-section'>
            <Box>
            {questions[indexOfDisplayedQuestion].answerOptions.map((answerOption) => {
                const [stylingClass, iconType] = getClass(answerOption)
            return ( 
            <button disabled={displayAnswers} onClick={(e) => {handleAnswerButtonWrapper(answerOption.isCorrect,e)}} key={answerOption.key} className = {stylingClass} >
                {String(answerOption.answerText)}
                {iconType==='none'? "":iconType==='tick'? <DoneIcon></DoneIcon>:<CloseIcon></CloseIcon>}
            </button>
            )})}
            </Box>
        </div>
    );
}

export default Answer;