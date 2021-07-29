import React, {useState} from 'react';
import {questions} from './questions';
import ProgressBar from '../ProgressBar';
import Score from './Score'

export default function Quiz(){
    const [displayedQuestion, setDisplayedQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);
    const [displayAnswers, setDisplayAnswers] = useState(false);
    const [displayFeedback, setDisplayFeedback] = useState(false);

    const handleAnswerButton = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        setDisplayAnswers(true);
        setDisplayFeedback(true)

};
    const handleNextQuestion = () => { 
        setDisplayFeedback(false);
        setDisplayAnswers(false);

        const nextQuestion = displayedQuestion + 1;
        if (nextQuestion < questions.length) {
            setDisplayedQuestion(nextQuestion)
        } else {
            setDisplayedQuestion(nextQuestion)
            setDisplayScore(true)
        }

    };
    return(
        <div className='question-card'>
            <ProgressBar indexOfDisplayedQuestion = {displayedQuestion} totalNumberOfQuestions = {questions.length}/>
            {displayScore? (
                <Score numberOfCorrectAnswers = {score} totalNumberOfQuestions = {questions.length} /> ) : 
                (
            <>
                <div className='question-section'>
                    <div className='question-count'>Question {displayedQuestion +1} / {questions.length}</div>
                    {displayFeedback? (<div className='question-text'>{questions[displayedQuestion].feedback}</div>):
                    (<div className='question-text'>{questions[displayedQuestion].questionText}</div>)
                     }

                    <div className='answer-section'>
                        {questions[displayedQuestion].answerOptions.map((answerOption) => {
                            const bgColor = displayAnswers ?  answerOption.isCorrect === true? "bg-correct" : "bg-incorrect": "bg-regular";
                        return ( 
                        <button className = {`${bgColor} answer-button`} onClick={() => handleAnswerButton(answerOption.isCorrect)} key={answerOption.key}>{answerOption.answerText}</button>
                        )})}
                    </div>
                </div>
            </>)}
            {displayAnswers && 
                <button onClick = {handleNextQuestion} className="next-button">
                    Next Question
                </button>}
        </div>
);
}