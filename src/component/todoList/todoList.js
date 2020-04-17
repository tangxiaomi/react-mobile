import React, { useState } from "react";
import { InputItem, WingBlank, WhiteSpace, TextareaItem, Button, Icon, List, DatePicker} from 'antd-mobile';
import '../todoList/todoList.scss';

function TodoList(){
  const nowTimeStamp = Date.now();
  const now = new Date(nowTimeStamp)
  const Item = List.Item;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [listData, setListData] = useState([]);
  const [time, setTime] = useState(now);

  const addList = () => {
    setListData([...listData, {title: title, content: content, time: time}]);
    // 为啥没清空呀 需要把input的value添加上   考虑一下拖拽
    setTitle('');
    setContent('');
  }

  const deleteList = (index) => {
    const newListData = listData.filter((data, todoIndex) => index !== todoIndex)
    setListData(newListData);
  }

  return (
    <div>
      {/* 输入的区域 */}
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="md" className="input-container">
          <InputItem
              className="title"
              clear
              value={title}
              onChange={(value) => {setTitle(value)}}
              placeholder="请输入标题">
              标题
          </InputItem>
          <DatePicker
            mode="time"
            minuteStep={2}
            use12Hours
            value={time}
            onChange={time => setTime(time)}
          >
          <List.Item arrow="horizontal">执行时间</List.Item>
        </DatePicker>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <TextareaItem
            placeholder="请输入备忘的内容"
            rows={4}
            value={content}
            onChange={(value) => {setContent(value)}}
            count={100}
            />
        </WingBlank>
      </div>
    
      {/* 添加 */}
      <WingBlank size="md">
        <Button
          className="add-btn"
          type="primary"
          onClick={addList}>
          添加
        </Button>
      </WingBlank>

      {/* 列表展示的部分 */}
      {
        listData.map((list, index) => (
        <div key={index} className="list-container">
          <div className="time-container">
            09.20
            {/* {list.time.value} 有没有类似是pipe的日期转化公式????*/}
          </div>
          <List className="list" renderHeader={() => ''}>
            <Item className="title-content">{list.title}</Item>
            <Item multipleLine align="top" wrap>
              {list.content}
            </Item>
          </List>
          <div className="delete-container" onClick={() => {deleteList(index)}}>
            <span><Icon type='cross' /></span>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default TodoList;