import React from 'react';

/**
 * A component that shows an encouraging message upon user selection 
 * @param {boolean} latestAnswer - Indicates whether the last selected answer is correct or incorrect 
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