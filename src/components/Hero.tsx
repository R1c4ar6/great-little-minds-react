import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// USING VITE TO MAP THE CONTENTS OF THE FOLDER
const heroBgImages = {
    ...import.meta.glob('/src/assets/hero_bg/*.jpg', { eager: true }),
    ...import.meta.glob('/src/assets/hero_bg/*.jpeg', { eager: true }),
    ...import.meta.glob('/src/assets/hero_bg/*.png', { eager: true }),
};
const heroBgArray = Object.values(heroBgImages).map((img: any) => img.default);
// console.log(heroBgArray);

const Hero: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const changeBackground = () => {
            const index = Math.floor(Math.random() * heroBgArray.length);
            setBackgroundImage(heroBgArray[index]);
        };
        changeBackground();
        const heroBgInterval = setInterval(changeBackground, 60 * 1000);
        return () => clearInterval(heroBgInterval);
    }, []);


    return (
        <section id="hero" className="hero" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-overlay">
                <div className="container">
                    <h1 className="display-4 hero-title">{t('hero.welcome')}</h1>
                    <p className="lead">{t('hero.description')}</p>
                    <a href="#contact" className="btn">{t('hero.enroll')}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;