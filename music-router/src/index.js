import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import Todo from './pages/todo/Todo'
import News from './pages/news/News'
import { BrowserRouter } from 'react-router-dom';
import DogsFinder from './pages/dogsfinder/DogsFinder'
import Acdc from './pages/acdc/Acdc'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Acdc />
);