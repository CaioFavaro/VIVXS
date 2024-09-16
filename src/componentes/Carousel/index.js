import React, { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false); // Controle de zoom
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

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
        setIsZoomed(false); // Resetar o zoom quando o modal for aberto
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsZoomed(false); // Resetar o zoom quando o modal for fechado
    };

    const toggleZoom = (e) => {
        if (!isZoomed) {
            // Captura a posição do clique para definir a origem do zoom
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setZoomPosition({ x, y });
        }
        setIsZoomed(!isZoomed);
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
                        <img
                            src={currentImage}
                            alt="Modal"
                            className={`${styles.modalImage} ${isZoomed ? styles.zoomedImage : ''}`}
                            onClick={toggleZoom}
                            style={{
                                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
