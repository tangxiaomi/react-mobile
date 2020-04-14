import React from 'react';
import '../detail/detail.scss';
import {  useHistory } from 'react-router-dom';

function Index(){
  const routes = useHistory();
  const goBack = () => {
    routes.goBack();
  }
  return (
    <div>
      <div className="header-container">
        <span className="back" onClick={() => {goBack()}}> ＜ </span>
        <span>详情页面</span>
        <span></span>
      </div>
    </div>
  )
}
export default Index;