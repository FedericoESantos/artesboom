import React, { useState, useEffect } from 'react';
import './ImageTextSlide.css'; // No olvides crear este archivo CSS

const ImageTextSlide = ({ slides, interval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, interval);

        // Limpieza en el desmontaje del componente
        return () => clearTimeout(timer);
    }, [currentSlide, slides.length, interval]);

    return (
        <div className="slide-container">
            <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
            <p><strong>{slides[currentSlide].text}</strong></p>
        </div>
    );
};

export default ImageTextSlide;


