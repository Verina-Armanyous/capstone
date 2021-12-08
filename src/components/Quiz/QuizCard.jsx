import React, {useState, useEffect} from 'react';
import ProgressBar from '../ProgressBar';
import Score from './Score';
import Answer from './Answer';
import Question from './Question';
import {db, storage} from "../../firebase/config";
import {useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


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
    const { level } = useParams();
    function getMisconceptions(){
        db.collection(level).get().then((item) =>{
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
        <Card className='question-card' style={{padding:"20px"}}>
            <ProgressBar indexOfDisplayedQuestion = {displayedQuestion} totalNumberOfQuestions = {misconceptions.length} level={level}/>
            {displayScore? (
                <Score numberOfCorrectAnswers = {score} totalNumberOfQuestions = {misconceptions.length}  level = {level}/> ) : 
                (
            <>
                <CardContent className='question-section'>
                   
                    {displayFeedback?  <>
                    <Question questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} showFeedback ={true}/>
                    {misconceptions[displayedQuestion].feedbackImg !=='None'? <CardMedia style ={{maxWidth:'95%', padding:'10px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={misconceptions[displayedQuestion].feedbackImg}/>:<p></p>}
                    </>
                    :
                    <>
                    <Question questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} showFeedback ={false}/>
                    {misconceptions[displayedQuestion].questionImg !=='None'? <CardMedia style ={{maxWidth:'95%', padding:'10px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={misconceptions[displayedQuestion].questionImg}/>:<p></p>}
                    </>
                     }
                < Answer questions = {misconceptions} indexOfDisplayedQuestion={displayedQuestion} displayAnswers={displayAnswers} handleAnswerButton={handleAnswerButton}/>
                </CardContent>
            </>)}
            {displayAnswers && 
            <CardActions>
                <Button onClick = {handleNextQuestion} size="small" style={{flex: "right", right: "0", padding: "10px", backgroundColor:"black", color:"white"}}>
                    Next
                </Button>
            </CardActions>}
        </Card>:<></>
    );
}
export default QuizCard;