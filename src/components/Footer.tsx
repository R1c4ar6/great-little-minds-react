import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer bg-dark text-white py-3">
            <Container className="text-center">

                <h2 className="mb-3">Little Great Minds</h2>

                <div className="social-icons mb-4">
                    <a href="#" className="text-white me-3 hover-effect">
                        <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="#" className="text-white me-3 hover-effect">
                        <i className="bi bi-twitter-x fs-4"></i>
                    </a>
                    <a href={t('footer.instagram')} target="_blank" className="text-white hover-effect">
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                </div>

                <p className="mb-0">{t('footer.copyright')}</p>

                <div className="mt-3">
                    <a href="#" className="text-white me-3 small">{t('footer.privacy')}</a>
                    <a href="#" className="text-white small">{t('footer.terms')}</a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;