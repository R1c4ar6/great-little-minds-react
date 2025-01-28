import React from 'react';
import { useEffect, useState } from 'react';

// USING VITE TO MAP THE CONTENTS OF THE FOLDER
const heroBgImages = import.meta.glob('/src/assets/hero_bg/*.jpg|jpeg|png', { eager: true });
const heroBgArray = Object.values(heroBgImages).map((img: any) => img.default);
// console.log(heroBgArray);

const Hero: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const changeBackground = () => {
            const index = Math.floor(Math.random() * heroBgArray.length);
            setBackgroundImage(heroBgArray[index]);
        };
        changeBackground();
        const interval = setInterval(changeBackground, 20000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section id="hero" className="hero" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-overlay">
                <div className="container">
                    <h1 className="display-4 hero-title">Welcome to Little Great Minds</h1>
                    <p className="lead">Nurturing your child's growth from infancy to early childhood.</p>
                    <a href="#contact" className="btn btn-warning btn-lg">Enroll Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;