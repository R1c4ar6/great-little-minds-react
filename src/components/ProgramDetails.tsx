import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import infantCare from '../assets/programs/CREATIVECURRICULUMFORINFANT.jpg';
import toddlerCare from '../assets/programs/CREATIVECURRICULUMFORTODDLERS.jpg';
import preschool from '../assets/programs/CREATIVECURRICULUMFORFORTWOS.jpg';
import { Container, Row, Modal, Button } from 'react-bootstrap';
import infantScheduleEn from '../assets/schedule/1.png';
import infantScheduleEs from '../assets/schedule/2.png';
import toddlerScheduleEn from '../assets/schedule/3.png';
import toddlerScheduleEs from '../assets/schedule/4.png';
import preschoolScheduleEn from '../assets/schedule/5.png';
import preschoolScheduleEs from '../assets/schedule/6.png';

const ProgramDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const getScheduleImage = (programId: string) => {
        const isSpanish = i18n.language === 'es';
        switch (programId) {
            case 'infantCare':
                return isSpanish ? infantScheduleEs : infantScheduleEn;
            case 'toddlerProgram':
                return isSpanish ? toddlerScheduleEs : toddlerScheduleEn;
            case 'preschool':
                return isSpanish ? preschoolScheduleEs : preschoolScheduleEn;
            default:
                return infantScheduleEn;
        }
    };

    const programContent = {
        infantCare: {
            title: t('programs.infantCare.title'),
            details: t('programs.infantCare.details'),
            activities: t('programs.infantCare.activities', { returnObjects: true }) as any[],
            image: infantCare,
            scheduleImg: getScheduleImage('infantCare')
        },
        toddlerProgram: {
            title: t('programs.toddlerProgram.title'),
            details: t('programs.toddlerProgram.details'),
            activities: t('programs.toddlerProgram.activities', { returnObjects: true }) as any[],
            image: toddlerCare,
            scheduleImg: getScheduleImage('toddlerProgram')
        },
        preschool: {
            title: t('programs.preschool.title'),
            details: t('programs.preschool.details'),
            activities: t('programs.preschool.activities', { returnObjects: true }) as any[],
            image: preschool,
            scheduleImg: getScheduleImage('preschool')
        },
    };

    const program = programContent[id as keyof typeof programContent];

    if (!program) {
        return <p>{t('programs.notFound')}</p>;
    }

    return (
        <section id="program-details" className="section-padding bg-light mt-5">
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

                        {/* Add Schedule Image */}
                        <div className="mt-5">
                            <h3 className="mb-3">{t('programDetails.scheduleTitle')}</h3>
                            <img
                                src={program.scheduleImg}
                                alt="Program Schedule"
                                className="img-fluid rounded shadow-sm cursor-pointer"
                                onClick={handleShowModal}
                                style={{ cursor: 'pointer' }}
                            />
                            <p className="text-muted mt-2">
                                {t('programDetails.scheduleDescription')}
                            </p>
                        </div>
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

            {/* Modal for Schedule Image */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('programDetails.scheduleTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={program.scheduleImg}
                        alt="Program Schedule"
                        className="img-fluid"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        {t('programDetails.close')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default ProgramDetails;