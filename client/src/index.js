import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Routes>
        <Route  exact path="/page/:pageNumber" element={<App/>}/>
        <Route exact path="/" element={<App/>}/>
        
    </Routes>
    
 </BrowserRouter>

  
);


