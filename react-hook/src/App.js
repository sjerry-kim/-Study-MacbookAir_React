import './App.css';
import UseEffectComp from './components/UseEffectComp';
import UseReducerComp from './components/UseReducerComp';
import UseMemoComp from './components/UseMemoComp';

function App() {
  return (
    <div className="App">
      <UseEffectComp />
      <UseReducerComp />
      <UseMemoComp />
    </div>
  );
}

export default App;
