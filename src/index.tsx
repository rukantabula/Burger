import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import './index.css';

document.title = 'Burger Fanatics';
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const sendMetrics = (metric: string) => {
  // send JSON.stringify(metric) payload to me for monitoring
}

reportWebVitals(sendMetrics);
