import { useState } from "react";

const EventChangeFuncComp = () => {
  // set함수로 접근하기 위해서 하나의 useState에 객체로 생성
  const [message, setMessage] = useState({
    message : "안녕",
    name : "성춘향"
  });

  const changeText = (e)=>{
    const newMessage = {
      // ... 스프레드 연산자 : 객체나, 배열을 값을 꺼내서 출력
      ...message, // message : "안녕", name : 성춘향
      [e.target.name] : e.target.value
    }
    setMessage(newMessage);
  }

  return(
    <div>
      <input type="text" name="message" onChange={changeText}/>
      <p>{message.message}</p>
      <input type="text" name="name" onChange={changeText}/>
      <p>{message.name}</p>
    </div>
  );
}

export default EventChangeFuncComp ;