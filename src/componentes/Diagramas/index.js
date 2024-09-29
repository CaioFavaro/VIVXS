import React from 'react';
import Carousel from 'componentes/Carousel';

const diagramasData = [

    { image: '/assets/Diagramas/Diagrama4.png', title: 'Diagrama' }
];

export default function Diagramas() {
    return (
        <div>
            <Carousel data={diagramasData} />
        </div>
    );
}
