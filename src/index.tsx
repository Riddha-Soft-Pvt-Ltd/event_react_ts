import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'
import './index.css';
import AppContextContainer from './contexts/AppContext';
import App from './App';
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


