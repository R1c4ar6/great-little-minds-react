import React from 'react';
import infantCare from '../assets/omar-lopez-vTknj2OxDVg-unsplash.jpg';
import toddlerCare from '../assets/ana-klipper-1m2ZCygwVZ4-unsplash.jpg';
import preschool from '../assets/gabe-pierce-mLqWFEtlIEs-unsplash.jpg';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="programs" className="bg-light section-padding">
            <Container>
                <h2 className="text-center mb-5">{t('programs.title')}</h2>
                <Row>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src={infantCare} className="card-img-top" alt="Infant Care" />
                            <div className="card-body">
                                <h5 className="card-title">{t('programs.infantCare.title')}</h5>
                                <p className="card-text">{t('programs.infantCare.description')}</p>
                                <Link to="/programs/infantCare" className="btn btn-outline-primary">
                                    {t('programs.learnMore')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src={toddlerCare} className="card-img-top" alt="Toddler Program" />
                            <div className="card-body">
                                <h5 className="card-title">{t('programs.toddlerProgram.title')}</h5>
                                <p className="card-text">{t('programs.toddlerProgram.description')}</p>
                                <Link to="/programs/toddlerProgram" className="btn btn-outline-primary">
                                    {t('programs.learnMore')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src={preschool} className="card-img-top" alt="Preschool" />
                            <div className="card-body">
                                <h5 className="card-title">{t('programs.preschool.title')}</h5>
                                <p className="card-text">{t('programs.preschool.description')}</p>
                                <Link to="/programs/preschool" className="btn btn-outline-primary">
                                    {t('programs.learnMore')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Programs;
