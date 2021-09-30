import React, {useState, useEffect} from 'react';
import ProgressBar from '../ProgressBar';
import Score from './Score';
import AnswerSection from './AnswerSection';
import QuestionText from './QuestionText';
import db from '../../firebaseConfig';


/**
 * This component encompasses all other React components as well as the high-level logic that compose the quiz  
 * @returns{object} 
 */
function QuizCard(){
    const [displayedQuestion, setDisplayedQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);
    const [displayAnswers, setDisplayAnswers] = useState(false);
    const [displayFeedback, setDisplayFeedback] = useState(false);
    
    const [misconceptions, setMisconceptions] = useState([])
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    function getMisconceptions(){
        db.collection("misconceptions ").get().then((item) =>{
        const items = item.docs.map((doc) => doc.data());
        setMisconceptions(items);
        setIsSetupComplete(true);
        })
    }

    useEffect(() => {
        getMisconceptions();
    }, []);

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
        if (nextQuestion < misconceptions.length) {
            setDisplayedQuestion(nextQuestion)
        } else {
            setDisplayedQuestion(nextQuestion)
            setDisplayScore(true)
        }

    };

    return(
        (isSetupComplete) ?
        <div className='question-card'>
            <ProgressBar indexOfDisplayedQuestion = {displayedQuestion} totalNumberOfQuestions = {misconceptions.length}/>
            {displayScore? (
                <Score numberOfCorrectAnswers = {score} totalNumberOfQuestions = {misconceptions.length} /> ) : 
                (
            <>
                <div className='question-section'>
                    <div className='question-count'>Question {displayedQuestion +1} / {misconceptions.length}</div>
                    {displayFeedback? <QuestionText questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} showFeedback ={true}/>:
                    <QuestionText questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} showFeedback ={false}/>
                     }
                < AnswerSection questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} displayAnswers={displayAnswers} handleAnswerButton={handleAnswerButton}/>
                </div>
            </>)}
            {displayAnswers && 
                <button onClick = {handleNextQuestion} className="next-button">
                    Next Question
                </button>}
        </div>:<></>
    );
}
export default QuizCard;