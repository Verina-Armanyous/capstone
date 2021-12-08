import React from 'react';
import LevelCard from '../components/Home/LevelCard'

export default function Home() {
    return <div style={{marginLeft:'auto', justifyContent:'right'}}>
        <LevelCard levelName="Easy" description="World Media Coverage and Perceptions" numberOfQuestions = "10" unlocked={true} />
        <LevelCard levelName="Medium" description="World Map and Geography" numberOfQuestions = "10" unlocked={false}/>
        <LevelCard levelName="Difficult" description="World Statistics and Numbers" numberOfQuestions = "10" unlocked={false}/>
        </div>
}