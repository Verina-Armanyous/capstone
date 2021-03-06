import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';

/**
 * This component represents the progress bar that shows the progress throughout the game 
 * @param {number} indexOfDisplayedQuestion - indicates the index of the current question 
 * @param {number} totalNumberOfQuestions - indicates the total number of questions in the database
 */
function ProgressBar({indexOfDisplayedQuestion, totalNumberOfQuestions, level}) {
    // Changing the inherited material UI style
    let ColorLinearProgress;
    if (level ==="Easy"){
        ColorLinearProgress = withStyles({
        root: {
            height: 10,},
        colorPrimary: {
            backgroundColor: '#E7E7E7',
        },
        barColorPrimary: {
            backgroundColor: '#FFC700',
        }
        })(LinearProgress)}
    else if (level === "Medium"){
        ColorLinearProgress = withStyles({
        root: {
            height: 10,},
        colorPrimary: {
            backgroundColor: '#E7E7E7',
        },
        barColorPrimary: {
            backgroundColor: '#db2727',
        },
        })(LinearProgress)
    }
    else if (level === "Epic"){
        ColorLinearProgress = withStyles({
        root: {
            height: 10,},
        colorPrimary: {
            backgroundColor: '#E7E7E7',
        },
        barColorPrimary: {
            backgroundColor: '#7c376f',
        },
        })(LinearProgress)}
    else if (level === "Legendary"){
        ColorLinearProgress = withStyles({
        root: {
            height: 10,},
        colorPrimary: {
            backgroundColor: '#E7E7E7',
        },
        barColorPrimary: {
            backgroundColor: '#2e22b5',
        },
        })(LinearProgress)
    }

    const percentage = Math.round((indexOfDisplayedQuestion/totalNumberOfQuestions) * 100); 
    
    return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <ColorLinearProgress height="3" variant="determinate" value={percentage} style={{borderRadius:"20px", margin:"0px"}}/>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${percentage}%`}</Typography>
      </Box>
    </Box>
    )
}
export default ProgressBar;