import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className="redes">
                <div className="face">
                    <img src="./img/iconos/facebook.png" alt="face" />
                    <p>: / boom-arts</p>
                </div>

                <div className="insta">
                    <img src="./img/iconos/instagram.png" alt="insta" />
                    <p>: / @boomarts</p>
                </div>

                <div className="whats">
                    <img src="./img/iconos/whatsapp.png" alt="whats" />
                    <p>: 221 - 304/1421</p>
                </div>
            </div>

            <div className="links">
                <ul>
                    <li>
                        <a href="/">Inicio </a>
                        <p className='barra'> | </p>
                        <a href="/"> Quienes somos </a>
                        <p className='barra'> | </p>
                        <a href="/"> Diseño Gráfico </a>
                        <p className='barra'> | </p>
                        <a href="/"> Cursos </a>
                        <p className='barra'> | </p>
                        <a href="/"> Manualidades </a>
                        <p className='barra'> | </p>
                        <a href="/"> Cocina </a>
                        <p className='barra'> | </p>
                        <a href="/"> Ocio y Entretenimiento </a>
                        <p className='barra'> | </p>
                        <a href="/"> Papercraft </a>
                        <p className='barra'> | </p>
                        <a href="/"> Comics </a>
                        <p className='barra'> | </p>
                        <a href="/"> Cine </a>
                        <p className='barra'> | </p>
                        <a href="/"> Fornite </a>
                        <p className='barra'> | </p>
                        <a href="/"> Mundo Tecno </a>
                        <p className='barra'> | </p>
                        <a href="/"> Contacto</a>
                    </li>
                </ul>
            </div>

        <div className="logo-img">
            <img src="./img/fotos/viejo-logo.png" alt="logo-viejo" />
        </div>

        </div>
    )
}

export default Footer
