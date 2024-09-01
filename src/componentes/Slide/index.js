import React, { useState } from 'react';
import styles from './Slide.module.css'; // Importando o CSS Module

const data = [
    {
        image: '/assets/Tecnologias/awslb.png',
        title: 'Aws load Balancer',
    },
    {
        image: '/assets/Tecnologias/camel.png',
        title: 'Camel',
    },
    {
        image: '/assets/Tecnologias/cloudaipla.png',
        title: 'Google Cloud AI Plataform',
    },
    {
        image: '/assets/Tecnologias/denodo.png',
        title: 'Denodo',
    },
    {
        image: '/assets/Tecnologias/gzip.png',
        title: 'Gzip',
    },
    {
        image: '/assets/Tecnologias/resi4.png',
        title: 'Resilience4j',
    },
    {
        image: '/assets/Tecnologias/podauto.png',
        title: 'Horizontal Pod Autoscaler',
    },
    {
        image: '/assets/Tecnologias/kong.png',
        title: 'Kong',
    },
    {
        image: '/assets/Tecnologias/Prome.png',
        title: 'Prometheus',
    },
    {
        image: '/assets/Tecnologias/nginx.png',
        title: 'NGINX',
    },
    {
        image: '/assets/Tecnologias/kafka.png',
        title: 'Kafka',
    },
    {
        image: '/assets/Tecnologias/spark.png',
        title: 'Apache Spark MLib',
    },
    {
        image: '/assets/Tecnologias/zookeeper.png',
        title: 'Apache Zookeeper',
    },
    {
        image: '/assets/Tecnologias/redshift.png',
        title: 'Amazon Reshift ML',
    },
    {
        image: '/assets/Tecnologias/spring.png',
        title: 'Java Spring Boot',
    },
    {
        image: '/assets/Tecnologias/oracle.png',
        title: 'Banco de dados Oracle',
    },
];

export default function SliderComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                <img 
                    src={data[currentIndex].image} 
                    alt={data[currentIndex].title} 
                    className={styles.sliderImage} 
                />
                <div className={styles.caption}>{data[currentIndex].title}</div>
            </div>
            <button className={styles.prevArrow} onClick={prevSlide}>&#10094;</button>
            <button className={styles.nextArrow} onClick={nextSlide}>&#10095;</button>
        </div>
    );
}
