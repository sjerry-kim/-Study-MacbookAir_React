const UseReducerCountComp = (props) => {
  const {state,dispatch} = props; // 자식 컴포넌트는 props을 비구조화 할당으로 가져옴
  return (
    <div>
      <button onClick={()=>{dispatch({type : 'increment'})}}>+1</button>
    </div>
  );
}

export default UseReducerCountComp;