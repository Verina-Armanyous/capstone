import React from 'react';

export default function ProgressBar(props) {
    return (
        <div className='progress-bar'>
            <Filler count={props.count} total={props.total}/>
            {}
        </div>
    )
}

const Filler = (props) => {
    const percentage = (props.count/props.total) * 100; 
    return(
        <div className="filler" style={{width: `${percentage}%`}}>
        </div>
        
    );
}