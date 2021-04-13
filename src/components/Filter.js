import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TodoItem from './TodoItem';

/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({items}, {updateStatus}) {
  /* save number of item when items changed*/
  const [quantity, setQuantity] = useState(items.length);
  
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
    <div>
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

export default Filter