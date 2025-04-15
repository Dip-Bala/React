import React, {useState} from 'react'
import UseFetchHook from './useHooks/UseFetchHook.jsx';
import UseCounterHook from './useHooks/UseCounterHook';
import UsePrevHook from './useHooks/UsePrevHook';
import UseDebounce from './useHooks/UseDebounce.jsx';


function useCounter(){
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count + 1);
  }
  return {
    count : count,
    increaseCount : increaseCount
  }
}
export default function App() {
  return <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "100px 500px"}}>
    <UseCounterHook/>
    <hr/>
    <UseFetchHook/>
    <hr/>
    <UsePrevHook/>
    <hr/>
    <UseDebounce />
  </div>
}
