import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink} from 'react-router-dom';


const buttonStyle = {
    backgroundColor: "black",
    justifyContent: 'left',
    marginLeft: 'auto',
}
/**
 * 
 * @param {string} level - level name 
 * @param {string} description - description of level 
 * @param {number} numberOfQuestions - number of questions per level 
 * @param {string} status - shows whether the level is unlocked or locked 
 */
export default function LevelCard({level, description, numberOfQuestions, status}) {
    let style = { minWidth: 300, height:140,borderRadius:10, borderColor:'black', marginBottom:20, padding:5}
    if (level === 'Easy'){
        const firstStyle = {
          backgroundColor: "#ffcc01"
        }
        Object.assign(style, firstStyle)
    }
    if (level === 'Medium'){
        const secondStyle = {
          backgroundColor: "#db2727"
        }
        Object.assign(style, secondStyle)
    }
    if (level === 'Epic'){
        const thirdStyle = {
          backgroundColor: "#7c376f"
        }
        Object.assign(style, thirdStyle)
    }
    if (level === 'Legendary'){
        const thirdStyle = {
          backgroundColor: "#2e22b5"
        }
        Object.assign(style, thirdStyle)
    }
   
  return (
      <>
    <Card style = {style} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'white', fontWeight:'bold'}}>
          {level}
        </Typography>
        <Typography variant="h8" color="text.secondary" sx={{color:'white'}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {(status ==='unlocked'|| status ==='completed') && <Button to={`/intro/${level}`} component={RouterLink} size="medium" variant="contained" style={buttonStyle}>{status}</Button>}
      </CardActions>
    </Card>
    </>
  );
}

