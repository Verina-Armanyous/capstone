import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './main.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import QuizCard from './components/Quiz/QuizCard';
ReactDOM.render(  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz/:level" element={<QuizCard />} />
    </Routes>
  </BrowserRouter>, document.getElementById('root'))

