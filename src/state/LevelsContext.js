import React, {createContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const LevelsContext = createContext();

export function LevelsProvider ({children}){
    const [levels, setLevels] = useLocalStorage('levels-state',[
        {level: 'Easy', status:'unlocked', description:"World Media Coverage and Perceptions", numberOfQuestions: "10",},
         {level: 'Medium', status:'', description:"World Map and Geography", numberOfQuestions: "10"}, 
         {level: 'Difficult', status:'', description:"World Statistics and Numbers", numberOfQuestions:"10"} ]);

    const setStatusLevel = (level, state) => {
      setLevels(levels.map(l => l.level === level ? {...l, status: state} : l))
    }

    
    return (
      <LevelsContext.Provider value={{ levels, setLevels, setStatusLevel}}>
          { children }
      </LevelsContext.Provider>
  )
  }
  export default LevelsContext;
