import React from 'react';
import Carousel from 'componentes/Carousel';

const tecnologiasData = [
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

export default function Tecnologias() {
    return (
        <div>
            
            <Carousel data={tecnologiasData} />
        </div>
    );
}
