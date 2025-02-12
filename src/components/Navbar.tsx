import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import TranslateButton from './TranslateButton';
import { useTranslation } from 'react-i18next';

const NavbarComponent: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation(); 

    useEffect(() => {
        const hash = location.hash; 
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
            }
        }
    }, [location]); // Run this effect whenever the location changes

    return (
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href='/' className="menu-title">
                    Little Great Minds
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/#about">
                            {t('navbar.about')}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#programs">
                            {t('navbar.programs')}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#gallery">
                            {t('navbar.gallery')}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#testimonials">
                            {t('navbar.testimonials')}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#contact">
                            {t('navbar.contact')}
                        </Nav.Link>
                        <TranslateButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;