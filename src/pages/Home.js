import React, {useContext} from 'react';
import LevelCard from '../components/Home/LevelCard';
import LevelsContext from '../state/LevelsContext';
import ResetProgressButton from '../components/Home/ResetProgressButton';
import Footer from '../components/Home/Footer';
/**
 * Home page  
 */
export default function Home() {
    const {levels} = useContext(LevelsContext);
    return(
      <div>
        <ResetProgressButton/>
       <div style={{marginLeft:'auto', justifyContent:'right'}}>
               {
                 levels.map((level, i) => 
                   <LevelCard key={i} {...level} />
                 )
               }
       </div>
       <Footer/>
   </div>
    )


}