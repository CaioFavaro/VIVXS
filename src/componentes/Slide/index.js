import React from 'react';
import Carousel from 'componentes/Carousel';

const tecnologiasData = [
    {
        image: '/assets/Tecnologias/aws.png',
        title: 'Amazon AWS',
    },
    {
        image: '/assets/Tecnologias/poauto.png',
        title: 'Power automate',
    },
    {
        image: '/assets/Tecnologias/azure.png',
        title: 'Azure',
    },
    {
        image: '/assets/Tecnologias/bi.png',
        title: 'Power BI',
    },
    {
        image: '/assets/Tecnologias/docker.png',
        title: 'Docker',
    },
    {
        image: '/assets/Tecnologias/dynamo.png',
        title: 'DynamoDB',
    },
    {
        image: '/assets/Tecnologias/git.png',
        title: 'GitHub',
    },
    {
        image: '/assets/Tecnologias/jaci.png',
        title: 'Jasypt',
    },
    {
        image: '/assets/Tecnologias/shield.png',
        title: 'Amazon Shield',
    },
    {
        image: '/assets/Tecnologias/watch.png',
        title: 'Amazon CloudWatch',
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
        image: '/assets/Tecnologias/Prome.png',
        title: 'Prometheus',
    },
    {
        image: '/assets/Tecnologias/kafka.png',
        title: 'Kafka',
    },
    {
        image: '/assets/Tecnologias/zookeeper.png',
        title: 'Apache Zookeeper',
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
