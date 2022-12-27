import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'
import './index.css';
import AppContextContainer from './contexts/AppContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <Router>
    <AppContextContainer>
      <App />
    </AppContextContainer>
  </Router>

);


