import { Component } from "react";

class MapCompTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ["도경수", "김준면", "변백현"],
      inputName : "",
    }
    this.deleteName = (i) => {
      const goDeleteName = this.state.name.filter((n,index)=>(i != index));
        this.setState({name : goDeleteName});
    }
  }
  
  render() { 
    const {name, inputName} = this.state;
    const nameLists = name.map((n,i)=>(
      <tr key={i}>
        <td>{i+1}</td>
        <td onClick={() => {this.deleteName(i)}}> {/* <- 💔 동기식으로 실행 : 왜? */}
          {n}
        </td>
      </tr>
    ))
    return (
      <div>
        {/* input에서 onChange를 사용할 때 값을 넣어줄 빈 객체가 필요한 듯.. */}
        <input type="text" onChange={(e)=>{this.setState({inputName : e.target.value})}}/>
        <button onClick={()=>{
          const newName = this.state.name.concat(inputName);
          this.setState({name : newName}) // concat으로 새 이름이 추가된 객체 newName로 변경
        }}>이름추가</button>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>이름</td>
            </tr>
            {nameLists}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MapCompTest;