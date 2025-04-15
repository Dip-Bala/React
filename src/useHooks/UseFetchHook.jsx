import React, {useState, useEffect} from 'react'
import { useFetch } from '../Hooks/hooks';
function UseFetchHook() {
  const [currPost, setCurrPost] = useState(1);
  const {finalData, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currPost}`, 10)

  if(loading){
    return <div>
      loading...
    </div>
  }
  return (
    <div>
      <button onClick={() => setCurrPost(1)}>1</button>
      <button onClick={() => setCurrPost(2)}>2</button>
      <button onClick={() => setCurrPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default UseFetchHook