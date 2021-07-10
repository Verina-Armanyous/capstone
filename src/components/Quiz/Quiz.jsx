import React, {useState} from 'react';
import {questions} from './questions';
import ProgressBar from '../ProgressBar';

export default function Quiz(){
    const [displayedQuestion, setDisplayedQuestion] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButton = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
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
            <ProgressBar count={displayedQuestion} total = {questions.length}/>
            {displayScore? (
                <div className='score-section'>
                    you scored {score} out of {questions.length}
                </div>) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>Question {displayedQuestion +1} / {questions.length}</div>
                    <div className='question-text'>{questions[displayedQuestion].questionText}</div>
                    <div className='question-answers'>
                        {questions[displayedQuestion].answerOptions.map((answerOption) => <button onClick={() => handleAnswerButton(answerOption.isCorrect)} key={answerOption.key}>{answerOption.answerText}</button>)}
                    </div>
                </div>
            </>)}
        </div>
);
}