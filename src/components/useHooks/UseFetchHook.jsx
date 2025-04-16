import React, { useState, useEffect } from 'react'
import { useFetch } from '../../Hooks/hooks';
function UseFetchHook() {
  const [currPost, setCurrPost] = useState(0);
  const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currPost}`)

  return (
    loading ? <div className="flex items-center gap-5 border rounded-xl p-5 border-gray-500 hover:bg-stone-900">
      loading...
    </div> :
      <div className="flex flex-col items-center gap-5 border rounded-xl p-5 border-gray-500 hover:bg-stone-900">
        <h4 className="font-bold text-xl">Hook : useFetchHook</h4>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-3">
          <Button clickMe={setCurrPost} val={1} />
          <Button clickMe={setCurrPost} val={2} />
          <Button clickMe={setCurrPost} val={3} />
          </div>
          {JSON.stringify(finalData)}
        </div>
      </div>
  )
}

function Button({ clickMe, val }) {
  return <button className="flex items-center justify-center p-5 border w-10 h-10 border-gray-600 hover:border-indigo-500 text-white rounded-xl" onClick={() => clickMe(val)}>{val}</button>
}

export default UseFetchHook