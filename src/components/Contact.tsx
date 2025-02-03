import React from "react";
import { Container, Row } from "react-bootstrap";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding">
            <Container>
                <Row className="align-items-center">
                    {/* Column for the Title */}
                    <div className="col-lg-5 col-md-12 mb-5 mb-lg-0">
                        <h2 className="section-title text-center">Contact Us</h2>
                        <p className="text-muted mt-3">We'd love to hear from you! Reach out to us for any inquiries or feedback.</p>
                    </div>

                    {/* Column for the Form */}
                    <div className="col-lg-7 col-md-12">
                        <div className="contact-form card shadow-lg">
                            <div className="card-body p-4">
                                <form id="contactForm" action="#" method="post">
                                    <div className="mb-4">
                                        <label htmlFor="fullName" className="form-label">Full Name <span className="text-danger">*</span></label>
                                        <input type="text" name="fullName" className="form-control" id="fullName" placeholder="Enter Your Full Name" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="emailAddress" className="form-label">Email Address <span className="text-danger">*</span></label>
                                        <input type="email" name="emailAddress" className="form-control" id="emailAddress" placeholder="Enter Your Email" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input type="tel" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Enter Your Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="userMessage" className="form-label">Your Message <span className="text-danger">*</span></label>
                                        <textarea name="userMessage" id="userMessage" rows={6} placeholder="Please enter your message here..." className="form-control" required></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning btn-lg">Submit Inquiry</button>
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