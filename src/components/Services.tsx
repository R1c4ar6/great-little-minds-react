import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

import tuitionImage from '../assets/services/tuition.jpg';
import monthlyPaymentImage from '../assets/services/monthly.jpg';
import cafeteriaImage from '../assets/services/cafeteria.jpg';
import extendedHoursImage from '../assets/services/extended.jpg';
import workshopImage from '../assets/services/workshop.jpg';
import parentSchoolImage from '../assets/services/parents.jpg';
import summerSchoolImage from '../assets/services/summer.jpg';

const Services: React.FC = () => {
    const { t } = useTranslation();

    // { title: "...", tuition: { ... }, monthlyPayment: { ... }, ... }
    const services = t('services', { returnObjects: true }) as any;

    const serviceImages: { [key: string]: string } = {
        tuition: tuitionImage,
        monthlyPayment: monthlyPaymentImage,
        cafeteria: cafeteriaImage,
        extendedHours: extendedHoursImage,
        workshop: workshopImage,
        parentSchool: parentSchoolImage,
        summerSchool: summerSchoolImage
    };

    return (
        <section id="services" className="section-padding bg-light">
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h2 className="text-center mb-5">{services.title}</h2>
                    </Col>
                </Row>

                {Object.entries(services).map(([key, serviceData], index) => {
                    // Skip the title entry
                    if (key === 'title') return null;

                    const isOdd = index % 2 !== 0;

                    const imageCol = (
                        <Col key={`${key}-image`} md={4} className="mb-3 mb-md-0">
                            <img
                                src={serviceImages[key]} 
                                alt={(serviceData as any).title}
                                className="img-fluid rounded shadow-sm"
                            />
                        </Col>
                    );

                    const textCol = (
                        <Col key={`${key}-text`} md={5} className="mb-3 mb-md-0">
                            {/* Cast serviceData to any to access properties */}
                            <h3 className="text-center">{(serviceData as any).title}</h3>
                            <p>{(serviceData as any).description}</p>
                            <p>{(serviceData as any).description2}</p>

                            {(serviceData as any).activities && (
                                <ul className="mt-2">
                                    {(serviceData as any).activities.map((activity: string, idx: number) => (
                                        <li key={idx}>{activity}</li>
                                    ))}
                                </ul>
                            )}

                            {(serviceData as any).topics && (
                                <ul className="mt-2">
                                    {(serviceData as any).topics.map((topic: string, idx: number) => (
                                        <li key={idx}>{topic}</li>
                                    ))}
                                </ul>
                            )}
                        </Col>
                    );

                    const priceCol = (
                        <Col key={`${key}-price`} md={3} className="mb-3 mb-md-0">
                            <div className="text-center">
                                <h5>{(serviceData as any).price}</h5>
                                <h5>{(serviceData as any).price2}</h5>

                            </div>
                        </Col>
                    );

                    return (
                        <Row key={key} className={`mb-5 align-items-center p-5 rounded ${isOdd ? 'bg-alt' : ''}`}
                        >
                            {isOdd ? (
                                // Odd index: Price Left, Text Middle, Image Right
                                <>
                                    {priceCol}
                                    {textCol}
                                    {imageCol}
                                </>
                            ) : (
                                // Even index: Image Left, Text Middle, Price Right (default)
                                <>
                                    {imageCol}
                                    {textCol}
                                    {priceCol}
                                </>
                            )}
                        </Row>
                    );
                })}
            </Container>
        </section>
    );
};

export default Services;
