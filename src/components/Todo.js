import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: true },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  
  const addWord = (newText) => {
        putItems(items => [...items, {key : getKey(), text: newText, done: false}])
  };
  
  /* function that will let child change state of parents*/
  function updateStatus(key, bool) {
    var tmp = [...items]
    for(var idx = 0; idx < items.length; ++idx) {
      if(tmp[idx].key === key) {
        tmp[idx].done = bool;
        break;
      }
    }
    putItems(tmp)
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addWord = {addWord} />
      
      <Filter items = {items} updateStatus = {updateStatus} />
      
      <button style = {{display: "centre", width: "20%" }}>全てのToDoを削除</button>
    </div>
  );
}

export default Todo;