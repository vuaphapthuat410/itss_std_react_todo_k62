import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( props )  {
  const [isGrey, setGrey] = useState(props.item.done);
  
  const DefText = () => {return (<p>{props.item.text}</p>);};
  
  const GreyText = () => {return (<p  class = 'has-text-grey-light'>{props.item.text}</p>);};

  return (
    <label className="panel-block">
      <input type="checkbox" defaultChecked = {props.item.done}
        onClick= { () => {
          setGrey(!isGrey)
          props.onComplete(props.item.key, !isGrey) /* cuz setGrey doesn't change isGrey until onClick func end */
        }} 
      />
      
      {isGrey ? <GreyText /> : <DefText /> }
      
    </label>
  );
}

export default TodoItem;