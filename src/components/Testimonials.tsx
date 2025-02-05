import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const testimonials = [
    {
        id: 1,
        parentName: "Emma Johnson",
        childAge: "2 years old",
        testimonial: "Our daughter has blossomed since starting at Little Sprouts. The warm and nurturing environment has given her the confidence to explore and learn. We love the daily updates and the focus on play-based learning.",
    },
    {
        id: 2,
        parentName: "Michael Brown",
        childAge: "18 months",
        testimonial: "The early intervention programs at Sunny Days Preschool have been incredible. Our son was a bit shy, but the teachers have helped him come out of his shell. We appreciate the personalized attention and the fun activities.",
    },
    {
        id: 3,
        parentName: "Sophia Garcia",
        childAge: "3 years old",
        testimonial: "My daughter adores her teachers and her friends at Rainbow Learning Center. The outdoor play areas are fantastic, and she comes home excited to tell us about her adventures. A truly wonderful experience so far!",
    },
    {
        id: 4,
        parentName: "David Lee",
        childAge: "1 year old",
        testimonial: "We are thrilled with the care and education our son is receiving at Tiny Toes Nursery. The small class sizes allow for individualized attention, and we feel our son is learning and growing every day.",
    },
    {
        id: 5,
        parentName: "Olivia Thompson",
        childAge: "2.5 years old",
        testimonial: "The language and literacy programs at Happy Hearts Daycare are outstanding. Our daughter's vocabulary has exploded, and she loves storytime. The teachers are patient and make learning fun for the little ones.",
    },
    {
        id: 6,
        parentName: "Christopher Wilson",
        childAge: "18 months",
        testimonial: "We couldn't be happier with the overall experience at Little Explorers. The teachers are attentive and responsive to our son's needs. The daily schedules are well-organized, and we appreciate the focus on social development.",
    },
    {
        id: 7,
        parentName: "Emily Davis",
        childAge: "3 years old",
        testimonial: "My son has made incredible progress since enrolling in Play and Learn Academy. The teachers are fantastic, and the age-appropriate activities keep him engaged. We highly recommend this school for its holistic approach to early education.",
    },
];

const Testimonials: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 30000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <section id="testimonials" className="section-padding">
            <Container>
                <h2 className="text-center mb-5">What Parents Say</h2>
                <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                            >
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text">"{testimonial.testimonial}"</p>
                                        <h5 className="card-title">- {testimonial.parentName}</h5>
                                        <p className="card-subtitle mb-2 text-muted">{testimonial.childAge} child</p>
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