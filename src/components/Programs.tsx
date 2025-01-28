import React from 'react';
import infantCare from '../assets/omar-lopez-vTknj2OxDVg-unsplash.jpg';
import toddlerCare from '../assets/ana-klipper-1m2ZCygwVZ4-unsplash.jpg';
import preschool from '../assets/gabe-pierce-mLqWFEtlIEs-unsplash.jpg';

const Programs: React.FC = () => (
    <section id="programs" className="bg-light section-padding">
        <div className="container">
            <h2 className="text-center mb-5">Our Programs</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={infantCare} className="card-img-top" alt="Infant Care"/>
                        <div className="card-body">
                            <h5 className="card-title">Infant Care (0-1 years)</h5>
                            <p className="card-text">Providing a loving and secure environment for your little ones.</p>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={toddlerCare} className="card-img-top" alt="Toddler Program"/>
                        <div className="card-body">
                            <h5 className="card-title">Toddler Program (1-2 years)</h5>
                            <p className="card-text">Encouraging exploration and developing essential motor skills.</p>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={preschool} className="card-img-top" alt="Preschool"/>
                        <div className="card-body">
                            <h5 className="card-title">Preschool (2-3 years)</h5>
                            <p className="card-text">Building the foundation for academic and social success.</p>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Programs;
