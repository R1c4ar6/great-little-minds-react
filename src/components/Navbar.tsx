import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import TranslateButton from './TranslateButton';
import { useTranslation } from 'react-i18next';

const NavbarComponent: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#" className="menu-title">Little Great Minds</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#about">{t('navbar.about')}</Nav.Link>
                        <Nav.Link href="#programs">{t('navbar.programs')}</Nav.Link>
                        <Nav.Link href="#gallery">{t('navbar.gallery')}</Nav.Link>
                        <Nav.Link href="#testimonials">{t('navbar.testimonials')}</Nav.Link>
                        <Nav.Link href="#contact">{t('navbar.contact')}</Nav.Link>
                        <TranslateButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;