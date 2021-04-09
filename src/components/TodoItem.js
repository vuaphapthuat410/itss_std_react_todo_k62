import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( { item } )  {
  const [isGrey, setGrey] = useState(false);
  
  const DefText = () => {return (<p>{item.text}</p>);};
  
  const GreyText = () => {return (<p  class = 'has-text-grey-light'>{item.text}</p>);};

  return (
    <label className="panel-block">
      <input type="checkbox" 
        onClick= { () => {
          setGrey(!isGrey)
        }} 
      />
      
      {isGrey ? <GreyText /> : <DefText /> }
      
    </label>
  );
}

export default TodoItem;