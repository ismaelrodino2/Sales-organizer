import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {PrioritiesContextProvider} from './store/priorities-context'

ReactDOM.render(
    <PrioritiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrioritiesContextProvider>,

  document.getElementById('root')
);
