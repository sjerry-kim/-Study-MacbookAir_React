/*
// π λ€μ νμΈνκΈ° !!
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
            <h1>λ‘κ·ΈμΈμ μ±κ³΅νμμ΅λλ€</h1>
            <p>{name}μλλ€</p>
          </div>
        ):(
          <h1>λ‘κ·ΈμΈμ΄ νμν©λλ€</h1>
        )
      }
    </div>
  )
};

export default LoginFuncComp;

/* 
// π λ€μ νμΈνκΈ°!!
// Propsμ μλ£ν μ€μ 
// import {PropTypes} from "prop-types";
// μμ importλ₯Ό μ¬μ©νμ¬ μ€μ ν  μ μμ
LoginFuncComp.propTypes = {
  login : PropTypes.bool,
};
*/

LoginFuncComp.defaultProps = {
  name : "γγγ",
}