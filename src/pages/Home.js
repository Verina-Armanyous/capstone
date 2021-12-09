import React, {useContext} from 'react';
import LevelCard from '../components/Home/LevelCard';
import LevelsContext from '../state/LevelsContext';
export default function Home() {
    const { levels} = useContext(LevelsContext);
    return <div style={{marginLeft:'auto', justifyContent:'right'}}>
        {
          levels.map((level, i) => 
            <LevelCard key={i} {...level} />
          )
        }
        </div>
}