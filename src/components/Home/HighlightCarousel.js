'use client';
import Image from 'next/image';

const HighlightCarousel = ({ title = "It’ll blow your mind.", items = [] }) => {
    return (
        <div className="container pb-4">
            <h2 className="pb-2 ps-2">
                <span className="text-body-secondary">{title}</span>
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex overflow-auto" style={{ scrollSnapType: 'x mandatory', touchAction: 'pan-x' }} >
                        {items.map((item, index) => (
                            <div key={index} className="flex-shrink-0 p-2 card-item">
                                <div className="bg-body-tertiary border rounded-3 position-relative">
                                    <a href={item.link || "#"} rel="noopener noreferrer" className="text-reset">
                                        <Image
                                            src={item.image}
                                            width={300}
                                            height={200}
                                            className="img-fluid border rounded"
                                            alt={item.alt || `Destaque ${index + 1}`}
                                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                        />
                                        <div className="position-absolute bottom-0 end-0 p-2">
                                            <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded">
                                                {item.price} <span className="badge text-bg-danger">{item.discount}</span>
                                            </h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightCarousel;
