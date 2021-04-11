import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: true },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  const addWord = (evt) => {
        putItems(items => [...items, {key : getKey(), text: newText, done: false}])
        setNewText("")
  };
  
  /* save new text when change occurs*/
  const [newText, setNewText] = React.useState("");
  
  /* save number of item when items changed*/
  const [quantity, setQuantity] = React.useState(items.length);
  
  const [key, setKey] = useState('home');
  /* function that will let child change state of parents*/
  function updateStatus(key, bool) {
    var tmp = [...items]
    for(var idx = 0; idx < items.length; ++idx) {
      if(tmp[idx].key == key) {
        tmp[idx].done = bool;
        break;
      }
    }
    putItems(tmp)
  }
  /* show item list based on conditions , this make me so confused why if there doesn't have this one, 
  if u bring all the below code to where this function called, and yes the containers changes but it behaves abnormally
  if you switch between tabs*/
  const ShowList = ({arr}) => {
    setQuantity(arr.length)
    return (
      <div>
        {arr.map((item) => (
          <TodoItem
            item = {item}
            onComplete = {updateStatus}
          />
        ))}
      </div>
    )
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <div style = {{display: "flex", width: '20%'}}>
        <input class = "input" type = "text" placeholder ="Todoを入力してください" value={newText} 
          onChange = {e => setNewText(e.target.value)}
          onKeyPress={evt => {
            if (evt.key === 'Enter') addWord() 
          }}
        />
      </div>
      
      <Tabs defaultIndex={0} >
        <TabList>
          <Tab>すべて</Tab>
          <Tab>未完了</Tab>
          <Tab>完了済み</Tab>
        </TabList>
          <TabPanel>
            <ShowList arr = {items} /> 
          </TabPanel>
          <TabPanel>
            <ShowList arr = {items.filter(item => item.done == false)} /> 
          </TabPanel>
          <TabPanel>
            <ShowList arr = {items.filter(item => item.done == true)} /> 
          </TabPanel>
      </Tabs>
      
      
      <div className="panel-block">
        {quantity} items
      </div>
      
    </div>
  );
}

export default Todo;