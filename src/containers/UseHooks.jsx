import React, {useState} from 'react'
import UseFetchHook from '../components/useHooks/UseFetchHook.jsx';
import UseCounterHook from '../components/useHooks/UseCounterHook.jsx';
import UsePrevHook from '../components/useHooks/UsePrevHook.jsx';
import UseDebounce from '../components/useHooks/UseDebounce.jsx';

export default function UseHooks() {
  return <div className="grid grid-cols-3 gap-5 p-5">
    <UseCounterHook class/>
    <UseFetchHook/>
    <UsePrevHook/>
    <UseDebounce />
  </div>
}
