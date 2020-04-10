import React, { useState } from "react";
import { InputItem, WingBlank, WhiteSpace, TextareaItem, Button, Icon, List} from 'antd-mobile';
import '../../style/page/todoList.scss';

function TodoList(){
  const Item = List.Item;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [listData, setListData] = useState([]);

  const addList = () => {
    setListData([...listData, {title: title, content: content}]);
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
              placeholder="click the button below to focus">
              标题
          </InputItem>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <TextareaItem
            placeholder="请输入备忘的内容"
            rows={5}
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