import React from 'react';
import Home from './pages/Home'
import {LevelsProvider} from './state/LevelsContext'



export default function App () {
    return (
    <LevelsProvider>
        <Home/>
    </LevelsProvider>
    )
}