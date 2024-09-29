import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    return (
        <a className={styles.link} href={to}>
            {children}
        </a>
    );
}