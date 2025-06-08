import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import TranslateButton from './TranslateButton';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const NavbarComponent: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <Navbar 
            bg="light" 
            expand="lg" 
            fixed="top" 
            className="professional-navbar shadow-lg"
            variant="light"
        >
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to="/" className="brand-container">
                    <img 
                        src={logo} 
                        alt="Little Great Minds Logo" 
                        className="brand-logo" 
                    />
                    <span className="brand-text">Little Great Minds</span>
                </Navbar.Brand>
                
                <Navbar.Toggle 
                    aria-controls="navbarNav" 
                    className="custom-toggler"
                />
                
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link 
                            as={Link} 
                            to="/#about" 
                            className="nav-item-custom"
                        >
                            {t('navbar.about')}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/#programs" 
                            className="nav-item-custom"
                        >
                            {t('navbar.programs')}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/#gallery" 
                            className="nav-item-custom"
                        >
                            {t('navbar.gallery')}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/#testimonials" 
                            className="nav-item-custom"
                        >
                            {t('navbar.testimonials')}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/services" 
                            className="nav-item-custom services-link"
                        >
                            {t('services.title')}
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/#contact" 
                            className="nav-item-custom contact-link"
                        >
                            {t('navbar.contact')}
                        </Nav.Link>
                        <div className="translate-wrapper">
                            <TranslateButton />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
