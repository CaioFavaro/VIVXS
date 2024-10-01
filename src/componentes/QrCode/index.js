import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 
import styles from './QrCode.module.css';

export default function QRCodeButton() {
  return (
    <div className={styles.qrCodeContainer}>
      <QRCodeCanvas value="https://vivxs.vercel.app" size={100} />
    </div>
  );
}
