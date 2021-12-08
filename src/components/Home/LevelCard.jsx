import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import { Link as RouterLink} from 'react-router-dom';


const buttonStyle = {
    backgroundColor: "black",
    justifyContent: 'left',
    marginLeft: 'auto',
}
export default function LevelCard({levelName, description, numberOfQuestions, unlocked}) {
    let style = { minWidth: 300, borderRadius:10, borderColor:'black', marginBottom:20, padding:10}
    if (levelName === 'Easy'){
        const firstStyle = {
          backgroundColor: "#FFC700"
        }
        Object.assign(style, firstStyle)
    }
    if (levelName === 'Medium'){
        const secondStyle = {
          backgroundColor: "#AC2CC1"
        }
        Object.assign(style, secondStyle)
    }
    if (levelName === 'Difficult'){
        const thirdStyle = {
          backgroundColor: "#365CF6"
        }
        Object.assign(style, thirdStyle)
    }
  return (
      <>
    <Card style = {style} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'white', fontWeight:'bold'}}>
          {levelName}
        </Typography>
        <Typography variant="h8" color="text.secondary" sx={{color:'white'}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Fab size="small" disabled >{numberOfQuestions}</Fab>
        {unlocked && <Button to={`quiz/${levelName}`} component={RouterLink} size="medium" variant="contained" style={buttonStyle}>Start</Button>}
      </CardActions>
    </Card>
    </>
  );
}

