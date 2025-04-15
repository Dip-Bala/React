import React, {useState} from 'react'
import { useCounter } from '../Hooks/hooks';

export default function UseCounterHook() {
    const {count, increaseCount} = useCounter();
    return (
      <div>
        {count}
        <button onClick={increaseCount}>increment</button>
      </div>
    )
}
