import { useState, useEffect } from 'react';

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

function useStorage(input) {
  const [items, setItems] = useState(input);
　
　/* 副作用を使う */
  useEffect(() => {
    const todos = window.localStorage.getItem(STORAGE_KEY);
    if(!todos) {
      console.log("Empty local storage.");
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
    }
    else
      setItems(JSON.parse(todos));
  }, []);

  const putItems = items => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems(items)
  };

  const clearItems = () => {
    window.localStorage.clear();
  };

  return [items, putItems, clearItems];
}

export default useStorage;