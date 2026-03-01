import React, { useState, useEffect } from 'react';
import './Carousel.css';
import murukku from '../assets/murukku.png';
import bananaChips from '../assets/banana_chips.png';
import mixture from '../assets/mixture.png';
import ribbonPakoda from '../assets/ribbon_pakoda.png';
import thattai from '../assets/thattai.png';

const slides = [
    {
        id: 1,
        image: murukku,
        title: 'Traditional Murukku',
        description: 'Crispy & savory south indian spiral snack'
    },
    {
        id: 2,
        image: bananaChips,
        title: 'Kerala Banana Chips',
        description: 'Golden fries lightly salted perfectly'
    },
    {
        id: 3,
        image: mixture,
        title: 'Spicy Madras Mixture',
        description: 'A crunchy blend of savory bites & nuts'
    },
    {
        id: 4,
        image: ribbonPakoda,
        title: 'Ribbon Pakoda',
        description: 'Crunchy, thin, and savory gram flour ribbons'
    },
    {
        id: 5,
        image: thattai,
        title: 'Crispy Thattai',
        description: 'Traditional flattened rice crackers with flavors'
    }
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div key={slide.id} className={`carousel-slide ${index === current ? 'active' : ''}`}>
                    <img src={slide.image} alt={slide.title} />
                    <div className="carousel-caption">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                    </div>
                </div>
            ))}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
}
