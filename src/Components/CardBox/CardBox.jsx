import React from 'react'
import { Link } from 'react-router-dom';

const CardBox = () => {
    return (
        <div className='container'>
            <Link to="/quienes">
                <div className="container-box img-box1">
                    <div className="box box1">
                        <h4 className='title'>Quienes Somos</h4>
                        <p>Conoce nuestra historia</p>
                        <div className="back-hove"></div>
                    </div>
                </div>
            </Link>

            <Link to="/diseño">
                <div className="container-box img-box2">
                    <div className="box box2">
                        <h4 className='title'>Diseño Gráfico</h4>
                        <p>Muestras de nuestros servicios gráficos</p>
                        <div className="back-hove"></div>
                    </div>
                </div>
            </Link>

            <Link to="/cursos">
                <div className="container-box img-box3">
                    <div className="box box3">
                        <h4 className='title'>Cursos</h4>
                        <p>Cursos y tips interesantes</p>
                        <div className="back-hove"></div>
                    </div>
                </div>
            </Link>

            <Link to="/manualidades">
                <div className="container-box img-box4">
                    <div className="box box4">
                        <h4 className='title'>Manualidades</h4>
                        <p>Tutoriales y curiosidades a plena creatividad</p>
                        <div className="back-hove"></div>
                    </div>
                </div>
            </Link>

            <Link to="/cocina">
                <div className="container-box img-box5">
                    <div className="box box5">
                        <h4 className='title'>Cocina</h4>
                        <p>Recetas y Tips de cocina para agasajos</p>
                        <div className="back-hove"></div>
                    </div>
                </div>
            </Link>
            <Link to="/juegos">
                <div className="container-box img-box6">
                    <div className="box box6">
                        <h4 className='title'>Ocio y Juegos</h4>
                        <p>Entretenimiento para matar el tiempo</p>
                        <div className="back-hove"></div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default CardBox;