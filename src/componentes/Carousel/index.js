import React, { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const openModal = (image) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.slider}>
                <img 
                    src={data[currentIndex].image} 
                    alt={data[currentIndex].title} 
                    className={styles.sliderImage} 
                    onClick={() => openModal(data[currentIndex].image)}
                />
                <div className={styles.caption}>{data[currentIndex].title}</div>
            </div>
            <button className={styles.prevArrow} onClick={prevSlide}>&#10094;</button>
            <button className={styles.nextArrow} onClick={nextSlide}>&#10095;</button>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={closeModal}>
                            &times;
                        </span>
                        <img src={currentImage} alt="Modal" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
}
