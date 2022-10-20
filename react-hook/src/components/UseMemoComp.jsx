import { useMemo } from "react";
import { useState } from "react";

const UseMemoComp = () => {
  const [count,setCount] = useState(0);
  const [num, setNum] = useState(1);

  const doubleCount = ()=>{
    return count*2
  }

  const tripleNum = ()=>{
    return count*3
  }

  const memoCount = useMemo(()=>doubleCount,[count])
  const memoNum = useMemo(()=>tripleNum,[num])

  return (
    <div>
      <h2>{count} : {num}</h2>
      <button onClick={() =>{setCount(count+1)}}>count+1</button>
      <button onClick={() =>{setNum(num+1)}}>num+1</button>

      <h2>{memoCount} : {memoNum}</h2>
      <button onClick={doubleCount}>count+1</button>
      <button onClick={tripleNum}>num+1</button>
    </div>
  );
}

export default UseMemoComp;