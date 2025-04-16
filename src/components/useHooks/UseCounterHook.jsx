import React, {useState} from 'react'
import { useCounter } from '../../Hooks/hooks';

export default function UseCounterHook() {
    const {count, increaseCount} = useCounter();
    return (
      <div className="flex items-center gap-5 border rounded-xl p-5 border-gray-500 hover:bg-stone-900">
        <h4 className="font-bold text-xl">Hook : useCounter</h4>
        {count}
        <Button clickMe={increaseCount} description={"increment"}/>
      </div>
    )
}
function Button({clickMe, description}){
  return <button className="flex items-center justify-center p-5 border h-10 border-gray-600 hover:border-indigo-500 text-white rounded-xl" onClick={clickMe}>{description}</button>
}

