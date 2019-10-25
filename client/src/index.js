import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from "react-router-dom";
import { AuthProvider, } from "./providers/AuthProvider";
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import { initMiddleware, } from 'devise-axios';
import 'bootstrap/dist/css/bootstrap.min.css';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
document.getElementById('root')
);

