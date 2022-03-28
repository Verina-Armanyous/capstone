import React, {useState, useEffect} from 'react';
import ProgressBar from '../ProgressBar';
import Score from './Score';
import Answer from './Answer';
import Message from './Message'
import Question from './Question';
import {db} from "../../firebase/config";
import {useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import correctSound from '../../sounds/correct-answer.mp3';
import wrongSound from '../../sounds/wrong-answer.mp3';
import Feedback from './Feedback';
import ExictedCharacter from '../../characters/excited-yuhoo.png'
import ThinkingCharacter from '../../characters/hmm-thinking.png'
import NeutralCharacter from '../../characters/neutral.png'
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
    const [latestAnswer, setLatestAnswer] = useState(false);
    const { level } = useParams();
    function getMisconceptions(){
        db.collection(level).get().then((item) =>{
        let items = item.docs.map((doc) => doc.data());
        items = items.sort(() => Math.random() - 0.5)
        setMisconceptions(items);
        setIsSetupComplete(true);
        })
    }

    useEffect(() => {
        getMisconceptions();
    },[]);

    //Audio effect feedback 
    const correctAnswerAudio = new Audio(correctSound);
    const wrongAnswerAudio = new Audio(wrongSound);

    const handleAnswerButton = (isCorrect) => {
        setDisplayAnswers(true);
        setDisplayFeedback(true);
        setLatestAnswer(isCorrect);
        if (isCorrect) {
            setScore(score + 1)
            correctAnswerAudio.play();
        }else{
            wrongAnswerAudio.play();
        }

    };

    const handleNextQuestion = () => { 
        correctAnswerAudio.pause();
        wrongAnswerAudio.pause();
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
        <div className='parent'>
        {displayFeedback?     
        <img className='character' src={latestAnswer?ExictedCharacter:ThinkingCharacter} alt="character" />:
        <></>}
            <Card className='question-card' style={{padding:"15px 20px"}}>
            <ProgressBar indexOfDisplayedQuestion = {displayedQuestion} totalNumberOfQuestions = {misconceptions.length} level={level}/>
            {displayFeedback?<Message latestAnswer ={latestAnswer}/>:<></>}
            {displayScore? (
                <Score numberOfCorrectAnswers = {score} totalNumberOfQuestions = {misconceptions.length}  level = {level}/> ) : 
                (
            <>
                <CardContent className='question-section'>
                    {displayFeedback?  <>
                    <Feedback questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} latestAnswer ={latestAnswer}/>
                    {misconceptions[displayedQuestion].feedbackImg !=='None'? <CardMedia style ={{maxWidth:'95%', maxHeight:'400px', padding:'0px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={misconceptions[displayedQuestion].feedbackImg}/>:<p></p>}
                    </>
                    :
                    <>
                    <Question questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} showFeedback ={false}/>
                    {misconceptions[displayedQuestion].questionImg !=='None'? <CardMedia style ={{maxWidth:'95%',maxHeight:'400px', padding:'0px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={misconceptions[displayedQuestion].questionImg}/>:<p></p>}
                    </>
                     }
                < Answer questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} displayAnswers={displayAnswers} handleAnswerButton={handleAnswerButton}/>
                </CardContent>
            </>)}
            {displayAnswers && 
            <CardActions style={{display: "flex", justifyContent: "flex-end", padding:'0', marginTop:'-25px'}}>
                <Button onClick = {handleNextQuestion} size="small" style={{flex: "right", right: "0", padding: "10px", backgroundColor:"black", color:"white", margin:"0"}}>
                    Next
                </Button>
            </CardActions>}
        </Card>
        </div>:<></>
    );
}
export default QuizCard;