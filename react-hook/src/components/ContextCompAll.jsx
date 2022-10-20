// useContext 사용 및 확인 위해 여러 개의 컴포넌트를 작성
// useContext의 데이터 관리 특성 ↓
// : 리액트는 부모의 값을 props을 통해 자손에게 내려주는 형식으로 사용하나,
// useContext를 사용하면 중간에 props를 전해주지 않고도 자손 컴포넌트에 값 전달 가능

import React, { Component } from "react";
import { useContext } from "react";

const themes = {
  light : {
      foreground : "#000000",
      background : "#eeeeee"
  },
  dark : {
      foreground : "#ffffff",
      background : "#222222"
  },
  blue : {
      background : "#2244ff",
      foreground : "#ffffff"
  }
}

const ThemeContext = React.createContext(null);

const ContextCompAll = () => {
  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}
export default ContextCompAll;

const Toolbar = () => {
  return (
    <div>
      <ThemeButtonFunc />
      <ThemeButtonClass />
    </div>
  );
}

const ThemeButtonFunc = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{backgroundColor: theme.background, color: theme.foreground}}>
        useContext를 통해서 가져온 값입니다
      </button>
    </div>
  );
}

class ThemeButtonClass extends Component {
  static contextType = ThemeContext;
  render() { 
    return (
      <div>
        <button style={{backgroundColor: this.context.background,
                        color: this.context.foreground}}>
          클래스형 컴포넌트의 버튼입니다
        </button>
      </div>
    );
  }
}
