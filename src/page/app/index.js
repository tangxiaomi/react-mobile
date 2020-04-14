import React from "react";
import { Route, Link } from 'react-router-dom';
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
        <div className="footer-content"><Link to="/index/life/">Life</Link></div>
        <div className="footer-content"><Link to='/index/koubei/'>Koubei</Link></div>
        <div className="footer-content"><Link to='/index/friend/'>Friend</Link></div>
        <div className="footer-content"><Link to='/index/my/'>My</Link></div>
      </div>
   </div>
  );
}
export default Index;
