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
    const services = t('services', { returnObjects: true }) as any;

    const serviceImages = {
        tuition: tuitionImage,
        monthlyPayment: monthlyPaymentImage,
        cafeteria: cafeteriaImage,
        extendedHours: extendedHoursImage,
        workshop: workshopImage,
        parentSchool: parentSchoolImage,
        summerShool: summerSchoolImage
    };

    const renderService = (serviceKey: string, serviceData: any) => {
        return (
            <Row key={serviceKey} className="mb-5 align-items-center">
                <Col md={3} className="mb-3 mb-md-0">
                    <img 
                        src={serviceImages[serviceKey as keyof typeof serviceImages]} 
                        alt={serviceData.title} 
                        className="img-fluid rounded shadow-sm"
                    />
                </Col>
                <Col md={6} className="mb-3 mb-md-0">
                    <h3 className="h4">{serviceData.title}</h3>
                    <p>{serviceData.description}</p>
                    {serviceData.description2 && <p>{serviceData.description2}</p>}
                    
                    {/* Render activities if they exist */}
                    {serviceData.activities && (
                        <ul className="mt-2">
                            {serviceData.activities.map((activity: string, index: number) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    )}
                    
                    {/* Render topics if they exist (for parent school) */}
                    {serviceData.topics && (
                        <ul className="mt-2">
                            {serviceData.topics.map((topic: string, index: number) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                    )}
                </Col>
                <Col md={3} className="text-md-right">
                    <div className="bg-light p-3 rounded d-inline-block">
                        <h4 className="h5 text-primary mb-0">{serviceData.price}</h4>
                        {serviceData.price2 && (
                            <h4 className="h5 text-primary mb-0 mt-2">{serviceData.price2}</h4>
                        )}
                    </div>
                </Col>
            </Row>
        );
    };

    return (
        <section id="services" className="section-padding bg-light">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 className="display-4">{services.title}</h1>
                    </Col>
                </Row>
                
                {Object.entries(services).map(([key, value]) => {
                    // Skip the title entry
                    if (key === 'title') return null;
                    return renderService(key, value);
                })}
            </Container>
        </section>
    );
};

export default Services;