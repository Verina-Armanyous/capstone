import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink} from 'react-router-dom';
import {information} from "../../firebase/intros_outros";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LevelsContext from '../../state/LevelsContext';
import Confetti from 'react-confetti';
import ShareButton from './ShareButton';
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
            setStatusLevel('Epic', 'unlocked')
        }
        else if (level==='Epic'){
            setStatusLevel('Legendary', 'unlocked')
        }
        }
    const config = {
            angle: 90,
            spread: 360,
            startVelocity: 40,
            elementCount: "200",
            dragFriction: 0.12,
            duration: "4000",
            stagger: 3,
            width: "10px",
            height: "10px",
            perspective: "500px",
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
          };
    
    
    const getSuccessMessage = () => {
        return <div style={{alignItems: "center", margin: "auto"}}> 
            <Typography variant="h5">Yay, you scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}!</Typography>
            <Typography style= {{textAlign:'left'}} gutterBottom variant="h6" component="div">
                        {information[level].outro.text} 
                    </Typography><Confetti tweenDuration="10"/>
                    <>
                    {information[level].outro.img !==''? <CardMedia style ={{maxWidth:'95%', padding:'10px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={information[level].outro.img }/>:<p></p>}
                    {information[level].outro.video? <iframe width="700" height="550" src={`${information[level].outro.video}?hl=en&amp;cc_load_policy=1;&cc_lang_pref=en`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe> :<p></p>} </>
 
            {level==='Legendary'? 
            <>
                <ShareButton/> <Button to='/' component={RouterLink} size="medium" variant="contained" style={{backgroundColor: 'black', marginTop:'10px'}} onClick={unlock}>Home Page</Button>
            </> :
            <Button to='/' component={RouterLink} size="medium" variant="contained" style={{backgroundColor: 'black'}} onClick={unlock}>Level up</Button>}
            </div>
    }
    const getFailMessage = () => {
            return <div className='card-action'> 
                <Typography variant="h5">Oh no. You scored {numberOfCorrectAnswers} out of {totalNumberOfQuestions}. You are almost there! </Typography>
                <Button onClick={refreshPage} size="medium" variant="contained"  style={{backgroundColor: 'black', marginTop:'10'}}>Try Again</Button>
            </div>
    };

    const passingScore = Math.round(totalNumberOfQuestions/2);

    return(
        <div style ={{textAlign:'center'}}>
        {numberOfCorrectAnswers >= passingScore? getSuccessMessage(): getFailMessage()}
        </div>
    )}



export default Score;