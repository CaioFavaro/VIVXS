import React from 'react';
import Carousel from 'componentes/Carousel';

const diagramasData = [
    //{ image: '/assets/Diagramas/diagrama1.png', title: 'Diagrama 1' },
    //{ image: '/assets/Diagramas/diagrama2.png', title: 'Diagrama 2' },
    //{ image: '/assets/Diagramas/diagrama3.png', title: 'Diagrama 3' },
    { image: '/assets/Diagramas/Diagrama4.png', title: 'Diagrama' }
];

export default function Diagramas() {
    return (
        <div>
            <Carousel data={diagramasData} />
        </div>
    );
}
