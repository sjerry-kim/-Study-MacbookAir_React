const MemoComp = (props) => {
const {state, dispatch} = props;
  return (
    <div>
      <input type="text" onChange={(e)=>{
        dispatch({type : "printText",
                  payload : e.target.value})}} />
    </div>
  );
}

export default MemoComp;