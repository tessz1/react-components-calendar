import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import reportWebVitals from './reportWebVitals';

const currentDate = new Date(2017, 2, 8);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App date={currentDate} />
  </React.StrictMode>
);

reportWebVitals();
