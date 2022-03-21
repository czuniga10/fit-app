import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Card from './Components/Card'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App />} />
      <Route path='/workout' element = {<Card/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

