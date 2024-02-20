import React from 'react'
import "./CardNews.css";

const CardNews = () => {
    return (
        <div className='cardcontainer'>

            <span className='cardnews'>
                <img src="./img/news/papercraft.jpg" alt="mascara" />
                <div className='boxcard'>
                    <h3>Papercraft</h3>
                    <p>Una novedad que se impulsó en estos años</p>
                    <p>a travéz del arte de las manualidades en 3D.</p>
                    <p>Tuvo su inició en el arte milenario de las figuras de papel</p>
                    <p>conocido como "Origami".</p>
                </div>
            </span>

            <span className='cardnews'>
                <img src="./img/news/comic.jpg" alt="comic" />
                <div className='boxcard'>
                    <h3>Comic</h3>
                    <p>El mundo de los comics en la última década ha impulsdado</p>
                    <p>a que muchas personas se sumergan en esta fantasía. Por consecuencia,</p>
                    <p>dio inicios a los llamados Cosplayers, o personas disfrazadas</p>
                    <p>de sus personajes favoritos.".</p>
                </div>
            </span>

            <span className='cardnews'>
                <img src="./img/news/cine.jpg" alt="cine" />
                <div className='boxcard'>
                    <h3>Cine</h3>
                    <p>Con los avances tecnológicos el cine en la era moderna</p>
                    <p>a generado que se pierda la noción entre la realidad y la ficción.</p>
                    <p>No solo impulso a salas con cines en 3 dimensiones, sino que dió </p>
                    <p>inició a su cuarta dimensión de los sentidos.</p>
                </div>
            </span>

            <span className='cardnews'>
                <img src="./img/news/fornite.jpg" alt="fornite" />
                <div className='boxcard'>
                    <h3>Fortnite</h3>
                    <p>Más que un juego online, Fortnite se convirtió</p>
                    <p>en una comunidad mundial de personas que se comunican.</p>
                    <p>para jugar en equipos y batallar por horas el premio a</p>
                    <p>la coronación de la supervivencia.</p>
                </div>
            </span>

            <span className='cardnews'>
                <img src="./img/news/tecnologia.jpg" alt="tecno" />
                <div className='boxcard'>
                    <h3>Tencología</h3>
                    <p>Cada día nos soprendemos más como las máquinas</p>
                    <p>controlan nuestra vida. Desde el cine y la televisión</p>
                    <p>hasta las computadoras y aparatos electrónicos.</p>
                    <p>La tecnología se ha apoderado de nuestras vidas.</p>
                </div>
            </span>


        </div>
    )
}

export default CardNews
