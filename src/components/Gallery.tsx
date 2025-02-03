import React from "react";
import { Container, Row } from "react-bootstrap";

const galleryImages = {
    ...import.meta.glob('/src/assets/gallery/*.jpg', { eager: true }),
    ...import.meta.glob('/src/assets/gallery/*.jpeg', { eager: true }),
    ...import.meta.glob('/src/assets/gallery/*.png', { eager: true }),
};
const galleryArray = Object.values(galleryImages).map((img: any) => img.default);

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="bg-light section-padding">
            <Container>
                <h2 className="text-center mb-5">Gallery</h2>
                <Row>
                    {galleryArray.map((img, index) => (
                        <div key={index} className="col-md-4 col-sm-6 col-xs-12 mb-4">
                            <img
                                src={img}
                                alt={`Gallery Image ${index}`}
                                className="img-fluid rounded gallery-img"
                                data-bs-toggle="modal"
                                data-bs-target="#lightboxModal"
                                onClick={() => {
                                    const lightboxImage = document.getElementById('lightboxImage');
                                    if (lightboxImage) {
                                        (lightboxImage as HTMLImageElement).src = img;
                                    }
                                }}
                            />
                        </div>
                    ))}
                </Row>
            </Container>
            <div className="modal fade" id="lightboxModal" tabIndex={-1} aria-labelledby="lightboxLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <img id="lightboxImage" src="" alt="Gallery Image" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Gallery;