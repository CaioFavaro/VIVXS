import React from 'react';
import styles from './Contato.module.css';
import vivo from 'assets/vivo.png'; 
import caio from 'assets/caio.png';
import caiocode from 'assets/caio_code.png';
//import ana from 'assets/ana.png';
import anacode from 'assets/ana_code.png';
//import thi from 'assets/thi.png';
import thicode from 'assets/thi_code.png';
//import yas from 'assets/yas.png';
//import yascode from 'assets/yas_code.png';

export default function Contato() {
    const teamMembers = [
        {
            name: 'Thiemi Soubhia',
            role: 'Arquiteta de Software',
            image: vivo, 
            qrCode: thicode
        },
        {
            name: 'Yasmim Rodrigues',
            role: 'Product Owner',
            image: vivo,
            qrCode: 'path/to/qrCode2.png'
        },
        {
            name: 'Ana Flávia',
            role: 'Desenvolvedora Full Stack',
            image: vivo,
            qrCode: anacode
        },
        {
            name: 'Caio',
            role: 'User Experience Design',
            image: caio,
            qrCode: caiocode
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Equipe</h1>
            <div className={styles.team}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.member}>
                        <img src={member.image} alt={member.name} className={styles.photo} />
                        <h3 className={styles.name}>{member.name}</h3>
                        <p className={styles.role}>{member.role}</p>
                        <img src={member.qrCode} alt={`QR Code de ${member.name}`} className={styles.qrCode} />
                    </div>
                ))}
            </div>
        </div>
    );
}
