import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink} from 'react-router-dom';
import {information} from "../../firebase/intros_outros";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LevelsContext from '../../state/LevelsContext';

/**
 * This component shows the final score of the user 
 * @param {number} numberOfCorrectAnswers the number of questions answered correctly by the user 
 * @param {number} totalNumberOfQuestions total number of questions in tthe database 
 */
function Score({numberOfCorrectAnswers, totalNumberOfQuestions, level}) {
    const {setStatusLevel } = useContext(LevelsContext);

    function refreshPage() {
        window.location.reload();
    }
    const unlock =()=> {
        if (level==='Easy'){
            setStatusLevel('Medium', 'unlocked')}
        else if (level==='Medium'){
            setStatusLevel('Difficult', 'unlocked')
        }
        }

    const getSuccessMessage = () => {
        return <div style={{alignItems: "center", margin: "auto"}}> 
            <Typography variant="h5">Yayy! You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}</Typography>
            <Typography gutterBottom variant="h6" component="div">
                        {information[level].outro.text} 
                    </Typography>
                    {information[level].outro.img !==''? <CardMedia style ={{maxWidth:'95%', padding:'10px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={information[level].outro.img }/>:<p></p>}
                    {information[level].outro.video? <iframe width="700" height="550" src={information[level].outro.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> :<p></p>}  
            <Button to='/' component={RouterLink} size="medium" variant="contained" style={{backgroundColor: 'black'}} onClick={unlock}>Level up</Button>
            </div>
    }
    const getFailMessage = () => {
            return <div> 
                <Typography variant="h6">Oh no. You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}. You are almost there! </Typography>
                <Button onClick={refreshPage} size="medium" variant="contained" style={{backgroundColor: 'black', marginTop:'10'}}>Try Again</Button>
            </div>
    };

    const passingScore = Math.round(totalNumberOfQuestions/2);

    return(
        <div style ={{textAlign:'center'}}>
        {numberOfCorrectAnswers >= passingScore? getSuccessMessage(): getFailMessage()}
        </div>
    )}



export default Score;