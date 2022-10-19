import {useState} from "react";

const EventFuncComp = ()=>{
  const [num, setNum] = useState(0);
  const [name, setName] = useState("홍길동");

  // 익명함수 또는 화살표 함수로 작성해서 사용
  const numPlus = () => {setNum(num+3);}
  const nameChange = () => {setName("성춘향");}
  return (
    <div>
      {/* 같은 함수 안에 있는 내용이므로 클래스형과는 다르게 this 등의 키워드 없이 이름만 작성 */}
      <button onClick={numPlus}>{num}</button>
      <button onClick={nameChange}>{name}</button>
    </div>
  )
}

export default EventFuncComp;