import { useState, useEffect, useRef } from 'react';
export function useFetch(url, tryTime) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFinalData(data);
        setLoading(false);
    }
    useEffect(() => {
        getDetails()
    }, [url])

    useEffect(()=>{
        const interval = setInterval(getDetails, tryTime * 1000) //pass the function reference
        return () => {
            clearInterval(interval)
        }
    }, [])
    return {
        finalData,
        loading
    }
}

export function useCounter(){
    const [count, setCount] = useState(0);
    function increaseCount(){
      setCount(count + 1);
    }
    return {
      count : count,
      increaseCount : increaseCount
    }
}

export function usePrev(value){
    const prev = useRef();

    useEffect(() => {
        prev.current = value;
    }, [value]);

    return prev.current; //React first returns then calls useEffect, that's why it works
}

 
export function useDebounce(sendDataToBackend){
    const currTimer = useRef();
    return () => {
        clearTimeout(currTimer.current);
        currTimer.current = setTimeout(sendDataToBackend, 200);
    };
}