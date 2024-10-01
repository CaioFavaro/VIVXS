import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tecnologias from 'componentes/Slide';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './Projeto.module.css';
import diagrama from 'assets/Diagrama.jpg';

export default function Projeto() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const openModal = () => {
        setIsModalOpen(true);
        setIsZoomed(false); // Resetar o zoom quando o modal for aberto
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsZoomed(false); // Resetar o zoom quando o modal for fechado
    };

    const toggleZoom = (e) => {
        if (!isZoomed) {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setZoomPosition({ x, y });
        }
        setIsZoomed(!isZoomed);
    };

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <h3 className={styles.subtitulo}>Diagrama</h3>
                <div className={styles.imagemContainer}>
                    <div className={styles.diagramBox}>
                        <img 
                            className={styles.diagrama} 
                            src={diagrama} 
                            alt="Fluxograma" 
                            onClick={openModal} 
                        />
                    </div>
                </div>
            </div>

            <div className={styles.botaoContainer}>
                <Link to="/caso1">
                    <BotaoPrincipal tamanho="lg">Cliente Existente no Sistema Legado e no Data Mesh</BotaoPrincipal>
                </Link>
                <Link to="/caso2">
                    <BotaoPrincipal tamanho="lg"> Cenário Futurista: com Transição para o Data Mesh</BotaoPrincipal>
                </Link>
            </div>

            <div className={styles.container}>
                <h3 className={styles.subtitulo}>Tecnologias Usadas</h3>
                <Tecnologias />
            </div>

            

            {/* Modal para visualização do diagrama */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                        <img
                            src={diagrama}
                            alt="Diagrama ampliado"
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
