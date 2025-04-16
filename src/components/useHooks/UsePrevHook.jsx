import React, { useState } from 'react'
import { usePrev } from '../../Hooks/hooks'

export default function UsePrevHook() {
    const [state, setState] = useState(0);
    const prev = usePrev(state);
  return (
    <div className="flex items-center gap-5 border rounded-xl p-5 border-gray-500 hover:bg-stone-900">
        <h4 className="font-bold text-xl">Hook : usePrevHook</h4>
        <p className="">{state}</p>
        <Button clickMe={setState} val={state} description={"Increase the count"}/>
        <p>The prev value was {prev}</p>
    </div>
  )
}
function Button({clickMe, val, description}){
  return <button className="flex items-center justify-center p-5 border h-10 border-gray-600 hover:border-indigo-500 text-white rounded-xl" onClick={() => clickMe(val => val + 1)}>{description}</button>
}
