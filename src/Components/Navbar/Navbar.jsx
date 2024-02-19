import React from 'react'


const Navbar = () => {


    return (
        <div className="navbar">
            <img src="./img/logo-boom-arts.png" alt="logo" className='img-nav'/>
            <div className='nav'>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                            <a href="/">Quienes Somos</a>
                            <a href="/">Diseño Gráfico</a>
                            <a href="/">Cursos</a>
                            <a href="/">Manualidades</a>
                            <a href="/">Cocina</a>
                            <a href="/">Ocio y Juegos</a>
                            <a href="/">Contacto</a>
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
