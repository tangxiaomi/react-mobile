// 相当于是最外层的router-outlet
import React from "react";
import { Route } from 'react-router-dom';
import routes from '../src/routeConfig';

function AppRouter(){
  return (
    <div>
      {routes.map((routeConfig, index) => ( // 一般情况下key取什么值？？
      <Route key={index} path={routeConfig.path} component={routeConfig.component} />  
      ))}
    </div>
  )
}

export default AppRouter;
