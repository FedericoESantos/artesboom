import React from 'react'
import ImageTextSlide from '../Slide/ImageTextSlide';

const slides = [
    {
        image: "./img/slide/cero.jpg",
        text: "¿Que es el Arte para vos?"
    },
    {
        image: "./img/slide/uno.jpg",
        text: "¿Quien es Boom Arts?. Conocé nuestra historia. "
    },
    {
        image: "./img/slide/dos.jpg",
        text: "Servicio de diseño gráfico en general."
    },
    {
        image: "./img/slide/tres.jpg",
        text: "Cursos interesantes que ofrecemos. Algunos gratuitos y otros por un bajo costo."
    },
    {
        image: "./img/slide/cuatro.jpg",
        text: "Saca tu creatividad al máximo con tutoriales artísticos."
    },
    {
        image: "./img/slide/cinco.jpg",
        text: "Si te gusta la cocina deleita a tus invitados con recetas especiales."
    },
    {
        image: "./img/slide/seis.jpg",
        text: "El entretenimiento nunca falta con esta sección de juegos para divertirse."
    },
]

const Slide = () => {
    return (
        <div className="slice">
            <ImageTextSlide slides={slides} />
        </div>
    )
}

export default Slide;