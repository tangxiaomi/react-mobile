import React from "react";
import { Route, NavLink } from 'react-router-dom';
import './index.scss';
import Life from '../../component/life/life';
import Setting from '../../component/setting/setting';
import TodoList from '../../component/todoList/todoList';
import Friend from '../../component/friend/friend';

function Index(){

  return (
    <div>
      <div>
        <Route path="/index/life/" component={Life}/>
        <Route path="/index/koubei/" component={Setting}/>
        <Route path="/index/Friend/" component={Friend}/>
        <Route path="/index/my/" component={TodoList}/>
      </div>
      <div className="footer">
        <div className="footer-content"><NavLink to="/index/life/" activeClassName="hurray">Life</NavLink></div>
        <div className="footer-content"><NavLink to='/index/koubei/' activeClassName="hurray">Koubei</NavLink></div>
        <div className="footer-content"><NavLink to='/index/friend/' activeClassName="hurray">Friend</NavLink></div>
        <div className="footer-content"><NavLink to='/index/my/' activeClassName="hurray">My</NavLink></div>
      </div>
   </div>
  );
}
export default Index;
