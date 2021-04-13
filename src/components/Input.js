import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({addWord}) {
  
  /* save new text when change occurs*/
  const [newText, setNewText] = useState("");
  
  return (
    <div style = {{display: "flex", width: '20%'}}>
      <input class = "input" type = "text" placeholder ="Todoを入力してください" value={newText} 
        onChange = {e => setNewText(e.target.value)}
        onKeyPress={evt => {
          if (evt.key === 'Enter') {
            addWord(newText) 
            setNewText("")
          }
        }}
      />
    </div>
  );
}

export default Input;
