import { useEffect } from "react";
import { useState } from "react";

const UseEffectComp = () => {
  const [time, setTime] = useState(new Date);

  useEffect(()=>{
    console.log("타이머 작동")
    setInterval(() => {
      setTime(new Date)
    }, 1000);
  },[])

  return (
    <div>
      <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
    </div>
  );
}

export default UseEffectComp;