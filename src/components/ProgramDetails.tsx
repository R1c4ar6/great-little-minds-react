import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import infantCare from '../assets/omar-lopez-vTknj2OxDVg-unsplash.jpg';
import toddlerCare from '../assets/ana-klipper-1m2ZCygwVZ4-unsplash.jpg';
import preschool from '../assets/gabe-pierce-mLqWFEtlIEs-unsplash.jpg';

const ProgramDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the program ID from the URL
    const { t } = useTranslation();

    // Content mapping for each program
    const programContent = {
        infantCare: {
            title: t('programs.infantCare.title'),
            description: t('programs.infantCare.details'),
            image: infantCare
        },
        toddlerProgram: {
            title: t('programs.toddlerProgram.title'),
            description: t('programs.toddlerProgram.details'),
            image: toddlerCare
        },
        preschool: {
            title: t('programs.preschool.title'),
            description: t('programs.preschool.details'),
            image: preschool
        },
    };

    // Get the selected program's content
    const program = programContent[id as keyof typeof programContent];

    if (!program) {
        return <p>{t('programs.notFound')}</p>; // Handle invalid program IDs
    }

    return (
        <div className="program-details">
            <h1>{program.title}</h1>
            <img src={program.image} alt={program.title} />
            <p>{program.description}</p>
        </div>
    );
};

export default ProgramDetails;