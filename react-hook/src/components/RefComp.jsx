import { useRef } from "react";

const RefComp = () => {
  // 사용하는 방식은 클래스 컴포넌트의 React.creactRef와 동일
  // 요소를 DOM 객체로 가져와 사용
  const inputRef = useRef(null); // 처음에는 빈값을 넣어줌
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={()=>{
        console.log(inputRef); // -> 콘솔확인 시, current를 확인할 수 있음
        inputRef.current.style.backgroundColor = "red"; // 접근시 current로 접근!
      }}>
        Ref확인
      </button>
    </div>
  );
}

export default RefComp;