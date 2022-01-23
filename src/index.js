import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import MainContext from './context';

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <Root />
    </MainContext>
  </React.StrictMode>,
  document.getElementById('root')
);

