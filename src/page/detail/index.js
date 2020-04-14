import React from 'react';
import '../detail/detail.scss';
import {  useHistory , Prompt} from 'react-router-dom';

function Index(){
  const routes = useHistory();
  const goBack = () => {
    routes.goBack();
  }
  return (
    <div>
      {/* 退出当前页面的提醒 */}
      <Prompt when={true} message="Are you sure?" />   
      <div className="header-container">
        <span className="back" onClick={() => {goBack()}}> ＜ </span>
        <span>详情页面</span>
        <span></span>
      </div>
    </div>
  )
}
export default Index;
