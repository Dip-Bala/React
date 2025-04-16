import React from 'react'
import { useDebounce } from '../../Hooks/hooks'
import { useFetch } from '../../Hooks/hooks'
function UseDebounce() {

    function sendDataToBackend(){
        console.log("request send to backend");
    }
    const debounce = useDebounce(sendDataToBackend);
  return (
    <div className="flex items-center gap-5 border rounded-xl p-5 border-gray-500 hover:bg-stone-900">
      <h4 className="font-bold text-xl">Hook : useDebounce</h4>
        <input type="text" onChange={debounce} className="border"/>
    </div>
  )
}

export default UseDebounce