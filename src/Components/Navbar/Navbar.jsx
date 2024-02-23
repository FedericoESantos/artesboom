import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className="navbar">
            <img src="./img/logo.png" alt="logo" className='img-nav'/>
            <div className='nav'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='link'>Inicio</Link>
                            <Link to="/quienes" className='link'>Quienes Somos</Link>
                            <Link to="/diseño" className='link'>Diseño Gráfico</Link>
                            <Link to="/cursos" className='link'>Cursos</Link>
                            <Link to="/manualidades" className='link'>Manualidades</Link>
                            <Link to="/cocina" className='link'>Cocina</Link>
                            <Link to="/juegos" className='link'>Ocio y Juegos</Link>
                            <Link to="/contacto" className='link'>Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <h1 className='presentacion'>¡Bienvenidos a un portal artístico donde la inspiración es la base de toda creación!<span>&#160;</span></h1>
            </div>
            <div className='carrito'>
                <img src="./img/carrito.png" alt="carr" />
            </div>

        </div>
    )
}

export default Navbar;
