import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'

import App from './App';
import AppContextContainer from './contexts/AppContext';

import './index.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <AppContextContainer>
      <ToastContainer />
      <App />
    </AppContextContainer>
  </Router>
);


