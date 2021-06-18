import React from 'react';
import {Quiz_Questions} from './QuizQuestions';

export default function Quiz(){
    return(
    <div>
        {Quiz_Questions.map((question) => (
            <p>{question.questionText}</p>
        ))}
    </div>)
}
// Todo 
// display questions in order 


// Todo 
// calculate score 

// Todo
// showScore 