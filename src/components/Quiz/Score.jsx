import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink} from 'react-router-dom';
import Typography from '@mui/material/Typography';
/**
 * This component shows the final score of the user 
 * @param {number} numberOfCorrectAnswers the number of questions answered correctly by the user 
 * @param {number} totalNumberOfQuestions total number of questions in tthe database 
 */
function Score({numberOfCorrectAnswers, totalNumberOfQuestions, level}) {
    function refreshPage() {
        window.location.reload();
    }
    const getSuccessMessage = () => {
        return <div style={{alignItems: "center", margin: "auto"}}> 
            <Typography variant="h6">Yayy! You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}</Typography>
            <Button to='/' component={RouterLink} size="medium" variant="contained" style={{backgroundColor: 'black'}}>Level up</Button>
            </div>
    }

    const getFailMessage = () => {
            return <div> 
                <Typography variant="h6">Oh no. You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}. You are almost there! </Typography>
                <Button onClick={refreshPage} size="medium" variant="contained" style={{backgroundColor: 'black'}}>Try Again</Button>
            </div>
    };

    const passingScore = Math.round(totalNumberOfQuestions/2);

    return(
        <div style ={{textAlign:'center', marginTop:'15%'}}>
        {numberOfCorrectAnswers >= passingScore? getSuccessMessage(): getFailMessage()}
        </div>
    )}



export default Score;