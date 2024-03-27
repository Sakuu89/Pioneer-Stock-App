import logo from './logo.svg';
import './App.css';
import Sidenavbar from './Components/Sidenavbar/Sidenavbar';
import PopulationGraph from './Components/PopulationGraph/PopulationGraph';
import CryptoPrices from './Components/CryptoPrices/CryptoPrices';

function App() {
  return (
    <div className="App">
      <Sidenavbar/>
      <PopulationGraph/>
      <CryptoPrices/>
    </div>
  );
}

export default App;
