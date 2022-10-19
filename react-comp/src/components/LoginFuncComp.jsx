/*
// 💔 다시 확인하기 !!
import PropTypes from "prop-types";
*/

const LoginFuncComp = (props)=>{
  const {login, name} = props;
  console.log(typeof login);
  return(
    <div>
      {
        login? (
          <div>
            <h1>로그인에 성공하였습니다</h1>
            <p>{name}입니다</p>
          </div>
        ):(
          <h1>로그인이 필요합니다</h1>
        )
      }
    </div>
  )
};

export default LoginFuncComp;

/* 
// 💔 다시 확인하기!!
// Props의 자료형 설정
// import {PropTypes} from "prop-types";
// 위의 import를 사용하여 설정할 수 있음
LoginFuncComp.propTypes = {
  login : PropTypes.bool,
};
*/

LoginFuncComp.defaultProps = {
  name : "ㅇㅇㅇ",
}