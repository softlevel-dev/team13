import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import Team13App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Team13App />
    </BrowserRouter>
  </React.StrictMode>
);
