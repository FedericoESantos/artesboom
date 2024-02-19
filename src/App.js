import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import LineasH from './Components/LineasH';
import CardBox from './Components/CardBox/CardBox';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
        <Navbar />
        <LineasH />
        <Slider />
        <CardBox />
        <LineasH />
        
    </div>
  );
}

export default App;
