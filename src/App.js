import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import LineasH from './Components/LineasH';
import CardBox from './Components/CardBox/CardBox';
import Slide from './Components/Slide/Slide';
import CardNews from './Components/CardNews/CardNews';
import Sabias from "./Components/Sabias";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Slide />
        <CardBox />
        <LineasH />
        <Sabias />
        <CardNews />
        <Footer />
        
    </div>
  );
}

export default App;
