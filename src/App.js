import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import './Components/CardBox/CardBox.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quienes from './Components/PAGINAS/Quienes/Quienes';
import Inicio from './Components/PAGINAS/Inicio';
import CardBox from "./Components/CardBox/CardBox";
import Diseño from "./Components/PAGINAS/Diseño/Diseño";
import Cursos from "./Components/PAGINAS/Cursos/Cursos";
import Manualidades from "./Components/PAGINAS/Manualidades/Manualidades";
import Cocina from "./Components/PAGINAS/Cocina/Cocina";
import Juegos from "./Components/PAGINAS/Juegos/Juegos";
import Contacto from "./Components/PAGINAS/Contacto/Contacto";




function App() { // en App todo lo que esta dentro de Routes son las paginas, y lo que esta por fuera es lo que se repite en cada una de ellas
  return (
    <div className="App"> 
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Inicio />}></Route>  
            <Route path='/quienes' element={<Quienes />}></Route>
            <Route path='/diseño' element={<Diseño />}></Route>
            <Route path='/cursos' element={<Cursos />}></Route>
            <Route path='/manualidades' element={<Manualidades />}></Route>
            <Route path='/cocina' element={<Cocina />}></Route>
            <Route path='/juegos' element={<Juegos />}></Route>
            <Route path='/contacto' element={<Contacto />}></Route>
        </Routes>
        <CardBox />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
