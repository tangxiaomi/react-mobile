import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './appRouter';

ReactDOM.render(
  // 通常会将顶级的<App>元素包装在路由器中
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById('root')
);
