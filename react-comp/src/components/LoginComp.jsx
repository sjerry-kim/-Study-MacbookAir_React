import { Component } from "react";

class LoginComp extends Component{
  render(){
    const {login, name} = this.props;
    return (
      <div>
        {
          login == "true"?(
            <div>
              <h1>로그인에 성공하였습니다</h1>
              <p>{name}입니다</p>
            </div>
          ) : (
            <div>
              <h1>로그인이 필요합니다</h1>
            </div>
          )
        }
      </div>
    );
  }
}

export default LoginComp;