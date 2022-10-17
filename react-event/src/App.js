import logo from './logo.svg';
import './App.css';
import EventChangeComp from './components/EventChangeComp';
import EventChangeFuncComp from './components/EventChangeFuncComp';
import EventRefComp from './components/EventRefComp';

function App() {
  return (
    <div className="App">
      <EventChangeComp />
      <EventChangeFuncComp />
      <EventRefComp />
    </div>
  );
}

export default App;
