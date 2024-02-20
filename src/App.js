import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import LineasH from './Components/LineasH';
import CardBox from './Components/CardBox/CardBox';
import Slide from './Components/Slide/Slide';
import CardNews from './Components/CardNews/CardNews';
import Sabias from "./Components/Sabias";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Slide />
        <CardBox />
        <LineasH />
        <Sabias />
        <CardNews />
        
    </div>
  );
}

export default App;
