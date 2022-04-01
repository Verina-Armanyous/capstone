import React, {createContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const LevelsContext = createContext();


/**
 * Context for levels information 
 */
export function LevelsProvider ({children}){
    const [levels, setLevels] = useLocalStorage('levels-state',[
        {level: 'Easy', status:'unlocked', description:"World Media", numberOfQuestions: "6",},
         {level: 'Medium', status:'', description:"World Map: it's all relative", numberOfQuestions: "5"}, 
         {level: 'Epic', status:'', description:"World Map: more maps", numberOfQuestions:"4"}, 
         {level: 'Legendary', status:'', description:"World Statistics and Numbers", numberOfQuestions:"5"} ]);

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
