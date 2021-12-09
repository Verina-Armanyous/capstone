import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './main.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import QuizCard from './components/Quiz/QuizCard';
import Intro from './pages/Intro';
import {LevelsProvider} from './state/LevelsContext';

ReactDOM.render(  
  <LevelsProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="quiz/:level" element={<QuizCard />} />
      <Route path="intro/:level" element={<Intro />} />
    </Routes>
  </BrowserRouter>
  </LevelsProvider>, document.getElementById('root'))

