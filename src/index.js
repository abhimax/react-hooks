import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseStateCounter from './pages/UseStateCounter';
import UseEffectFlagCounter from './pages/UseEffectFlagCounter';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import UseRefInput from './pages/UseRefInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/use-state-counter" element={<UseStateCounter/>}/>
        <Route path="/use-effect-flag-counter" element={<UseEffectFlagCounter/>}/>
        <Route path="/use-ref-input" element={<UseRefInput/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
