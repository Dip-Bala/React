import React, { useState } from 'react'
import { usePrev } from '../Hooks/hooks'

export default function UsePrevHook() {
    const [state, setState] = useState(0);
    const prev = usePrev(state);
  return (
    <div>
        <p>{state}</p>
        <button onClick={() => {setState(state => state + 1)}}>Increase the Count</button>
        <p>The prev value was {prev}</p>
    </div>
  )
}
