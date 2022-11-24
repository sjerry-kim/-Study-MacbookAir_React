import './App.css';
import KakaoMap from './components/KakaoMap';
// import KakaoMapSearch from './components/KakaoMapSearch';
import SuitCompany from './components/SuitCompany';

// DataContext 프로바이더
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <SuitCompany />
      </DataProvider>
    </div>
  );
}

export default App;
