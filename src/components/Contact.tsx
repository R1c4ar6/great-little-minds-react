import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <section id="contact" className="section-padding">
            <Container>
                <Row className="align-items-center">
                    {/* Column for the Title */}
                    <div className="col-lg-5 col-md-12 mb-5 mb-lg-0">
                        <h2 className="section-title text-center">{t("contact.title")}</h2>
                        <p className="text-muted mt-3">{t("contact.description")}</p>
                    </div>

                    {/* Column for the Form */}
                    <div className="col-lg-7 col-md-12">
                        <div className="contact-form card shadow-lg">
                            <div className="card-body p-4">
                                <form id="contactForm" action="#" method="post">
                                    <div className="mb-4">
                                        <label htmlFor="fullName" className="form-label">{t("contact.formName")} <span className="text-danger">*</span></label>
                                        <input type="text" name="fullName" className="form-control" id="fullName" placeholder={`${t('contact.formNamePlaceholder')}`} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="emailAddress" className="form-label">{t("contact.formEmail")} <span className="text-danger">*</span></label>
                                        <input type="email" name="emailAddress" className="form-control" id="emailAddress" placeholder={`${t('contact.formEmailPlaceholder')}`} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phoneNumber" className="form-label">{t("contact.formPhone")} </label>
                                        <input type="tel" name="phoneNumber" className="form-control" id="phoneNumber" placeholder={`${t('contact.formPhonePlaceholder')}`} pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="userMessage" className="form-label">{t("contact.formMessage")} <span className="text-danger">*</span></label>
                                        <textarea name="userMessage" id="userMessage" rows={6} placeholder={`${t('contact.formMessagePlaceholder')}`} className="form-control" required></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning btn-lg">{t("contact.formButton")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;