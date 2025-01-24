import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding">
            <Container>
                <Row className="align-items-center">
                    <div className="col-md-6">
                        <img src="/src/assets/IMG-20220713-WA0006.jpg" className="img-fluid rounded" alt="About Us"></img>
                    </div>
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>
                            Little Great Minds is dedicated to providing a safe, nurturing, and stimulating environment for
                            children aged 0 to 4 years. Our experienced educators focus on each child's individual needs,
                            fostering creativity, curiosity, and foundational skills that prepare them for a bright future.
                        </p>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-check-circle-fill text-primary"></i> Qualified Staff</li>
                            <li><i className="bi bi-check-circle-fill text-primary"></i> Safe Environment</li>
                            <li><i className="bi bi-check-circle-fill text-primary"></i> Engaging Curriculum</li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default About;