import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
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