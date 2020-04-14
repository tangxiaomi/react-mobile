// 相当于是最外层的router-outlet
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'; // BrowserRouter相当于是router-outlet
import routes from '../src/routeConfig';

function AppRouter(){
  return (
    <Router>
      <div>
        {routes.map((routeConfig, index) => ( // 一般情况下key取什么值？？
        <Route key={index} path={routeConfig.path} component={routeConfig.component} />  
        ))}
      </div>
    </Router>
  )
}

export default AppRouter;
