import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {information} from '../firebase/intros_outros'
import {useParams } from 'react-router-dom';
import { Link as RouterLink} from 'react-router-dom';

/**
 * The Intro page for each level  
 */
export default function Intro() {
        const {level} = useParams();
    return (
        <Card className='question-card' style={{padding:"20px"}}>
                <CardContent className='question-section'>
                    <Typography gutterBottom variant="h6" component="div">
                        {information[level].intro.text} 
                    </Typography>
                    {information[level].intro.img !==''? <CardMedia style ={{maxWidth:'95%', padding:'10px', objectFit: 'contain'}}component="img" alt="green iguana" height="400" image={information[level].intro.img }/>:<p></p>}                </CardContent>
            <CardActions>
                <Button to={`/quiz/${level}`} component={RouterLink}  size="small" style={{flex: "right", right: "0", padding: "10px", backgroundColor:"black", color:"white"}}>
                    Start 
                </Button>
            </CardActions>
        </Card>
    )
}

