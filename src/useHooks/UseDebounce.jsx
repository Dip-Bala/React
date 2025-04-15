import React from 'react'
import { useDebounce } from '../Hooks/hooks'
import { useFetch } from '../Hooks/hooks'
function UseDebounce() {
    // const data = useFetch("https://jsonplaceholder.typicode.com/posts/");
    function sendDataToBackend(){
        console.log("request send to backend");
    }
    const debounce = useDebounce(sendDataToBackend);
  return (
    <div>
        <input type="text" onChange={debounce}/>
    </div>
  )
}

export default UseDebounce