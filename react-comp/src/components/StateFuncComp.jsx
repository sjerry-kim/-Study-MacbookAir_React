// 함수형 컴포넌트 state
// 리액트 16.8버전 이후로 추가된 내용
// react에서 useState (hook의 하나)를 가져와서 사용함
import {useState} from "react";

const StateFuncComp = ()=>{
  // 구조화 할당을 통해서 값과 수정하는 함수를 리턴받음 -> 💔 구조화, 비구조화 개념 정리하기
  const [Message, setMessage] = useState("메시지입니다");
  const [name, setName] = useState("홍길동");

  return(
    <div>
      <h1>{Message}</h1>
      <button onClick={
        ()=>setMessage("글자를 수정하였습니다")
      }>수정</button>

      <h1>{name}</h1>
      <button onClick={
        ()=>setName("성춘향")
      }>이름수정</button>
    </div>
  )
}

export default StateFuncComp;