import React from 'react';
import ReactDOM from 'react-dom/client';
import seconHandstore from './store/store';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={seconHandstore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);