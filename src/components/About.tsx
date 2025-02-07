import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="section-padding">
            <Container>
                <Row className="align-items-center">
                    <div className="col-md-6">
                        <img src="/src/assets/IMG-20220713-WA0006.jpg" className="img-fluid rounded" alt="{t('about.title')}"></img>
                    </div>
                    <div className="col-md-6">
                        <h2>{t('about.title')}</h2>
                        <p>
                            {t('about.description')}
                        </p>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-check-circle-fill text-primary"></i> {t('about.list.staff')}</li>
                            <li><i className="bi bi-check-circle-fill text-primary"></i> {t('about.list.environment')}</li>
                            <li><i className="bi bi-check-circle-fill text-primary"></i> {t('about.list.curriculum')}</li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default About;