import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import infantCare from '../assets/omar-lopez-vTknj2OxDVg-unsplash.jpg';
import toddlerCare from '../assets/ana-klipper-1m2ZCygwVZ4-unsplash.jpg';
import preschool from '../assets/gabe-pierce-mLqWFEtlIEs-unsplash.jpg';
import { Container, Row} from 'react-bootstrap';

const ProgramDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the program ID from the URL
    const { t } = useTranslation();

    // Content mapping for each program
    const programContent = {
        infantCare: {
            title: t('programs.infantCare.title'),
            details: t('programs.infantCare.details'),
            activities: t('programs.infantCare.activities', { returnObjects: true }) as any[],
            image: infantCare
        },
        toddlerProgram: {
            title: t('programs.toddlerProgram.title'),
            details: t('programs.toddlerProgram.details'),
            activities: t('programs.toddlerProgram.activities', { returnObjects: true }) as any[],
            image: toddlerCare
        },
        preschool: {
            title: t('programs.preschool.title'),
            details: t('programs.preschool.details'),
            activities: t('programs.preschool.activities', { returnObjects: true }) as any[],
            image: preschool
        },
    };

    // Get the selected program's content
    const program = programContent[id as keyof typeof programContent];

    if (!program) {
        return <p>{t('programs.notFound')}</p>; // Handle invalid program IDs
    }

    return (
        <section id='program-details' className="section-padding bg-light mt-5">
            <Container>
                <Row>
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <h1 className="display-4 mb-3">{program.title}</h1>
                        <p className="lead">{program.details}</p>
                        <h2 className="mt-5 mb-3">{t('programDetails.title')}</h2>
                        <ul className="list-group">
                            {program.activities.map((activity, index) => (
                                <li key={index} className="list-group-item">
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                        <img
                            src={program.image}
                            alt={program.title}
                            className="img-fluid rounded shadow-sm" 
                        />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default ProgramDetails;