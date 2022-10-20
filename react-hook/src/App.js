import './App.css';
import UseEffectComp from './components/UseEffectComp';
import UseReducerComp from './components/UseReducerComp';
import UseMemoComp from './components/UseMemoComp';
import CallbackComp from './components/CallbackComp';
import RefComp from './components/RefComp';
import ContextCompAll from './components/ContextCompAll';
import ContextParentComp1 from './components/ContextParentComp1';

function App() {
  return (
    <div className="App">
      <UseEffectComp />
      <UseReducerComp />
      <UseMemoComp />
      <CallbackComp />
      <RefComp />
      <ContextCompAll />
      <ContextParentComp1 />
    </div>
  );
}

export default App;
