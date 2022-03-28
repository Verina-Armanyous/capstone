import React from 'react';

/**
 * This component shows the question displayed one at a time 
 * @param {Array} questions -- This includes a list of questions where each question 
 * has the question text, answer options, and feedback 
 * @param {number} indexOfDisplayedQuestion -- the number of current question 
 * @param {boolean} showFeedback -- indicates whether to show the feedback on each question 
 */
function Message({latestAnswer}) {
    var displayedMessage;
    var styling;
    var random;
    const correctMessageArray = ['You are on a roll!', 'Keep up the good work!', 'You got it!', 'Impressive!', 'Yess!'];
    const incorrectMessageArray = ['Opps, you will get it next time :)', 'Nope, but you were so close!'];
    if (latestAnswer){
        random = Math.floor(Math.random() * correctMessageArray.length);
        displayedMessage = correctMessageArray[random]
        styling = 'correct-message'
    } else {
        random = Math.floor(Math.random() * incorrectMessageArray.length);
        displayedMessage = incorrectMessageArray[random]
        styling = 'incorrect-message'
    }
    return (  
       <p className={styling}>{displayedMessage}</p>
        )
    }
export default Message;