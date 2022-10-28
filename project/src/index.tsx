import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersDataMock } from './types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersData = {offersDataMock}/>
  </React.StrictMode>,
);
