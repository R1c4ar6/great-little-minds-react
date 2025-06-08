import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    // GETTING THIS FROM THE TRANSLATION JSON
    const testimonials = t("testimonials.list", { returnObjects: true }) as any[];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 50000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="section-padding">
            <Container>
                <h2 className="text-center mb-5">{t("testimonials.title")}</h2>
                <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {testimonials.map((testimonial: any, index: number) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                            >
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text">"{testimonial.testimonial}"</p>
                                        <h5 className="card-title">- {testimonial.parentName}</h5>
                                        <p className="card-subtitle mb-2 text-muted">{testimonial.childAge}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;