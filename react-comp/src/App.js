import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp';
import HelloFuncComp from './components/HelloFuncComp';
import LoginComp from'./components/LoginComp';
import LoginFuncComp from './components/LoginFuncComp';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';
import EventComp from './components/EventComp';
import EventFuncComp from './components/EventFuncComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComp name="도경수" adress="일산" num1="1" num2={1}>반갑습니다</HelloComp>
        <HelloFuncComp name="김준면"/>
        <LoginComp login="true" name="변백현"/>
        <LoginFuncComp login="true" />
        <StateComp />
        <StateFuncComp />
        <EventComp />
        <EventFuncComp />
      </header>
    </div>
  );
}

export default App;
