import { useCallback, useState } from "react";

const CallbackComp = () => {
  // useCallback : 함수를 기록해서 쓰는 hook
  const [name, setName] = useState("")
  const [count, setCount] = useState(1);

// 익명함수의 특징 : 한 번 쓰고 사라진다
// function 함수이름 (){}, const 함수이름 = ()=>{} : 함수 이름을 통해 여러번 꺼내 쓸 수 있음

const changeName = useCallback(()=>{setName("홍길동")},[name])

const onchange = useCallback((e)=>{
  console.log(count);
  setName(e.target.value)
  setCount(count+1)
},[count]) // 두번째 인자값을 넣어줌으로써 count값을 기억하게 됨 -> count 값이 올라감

  return (
    <div>
      <input type="text" onChange={onchange} />
      <button onClick={changeName}>이름:{name}</button>
    </div>
  );
}

export default CallbackComp;