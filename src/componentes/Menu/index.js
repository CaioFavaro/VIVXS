import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/#inicio">Início</MenuLink>
                <MenuLink to="/#problema">Problemática</MenuLink>
                <MenuLink to="/#solucao">Solução</MenuLink>
                <MenuLink to="/#detalhamento">Detalhamento</MenuLink>
                <MenuLink to="/#contato">Contato</MenuLink>
            </nav>
        </header>
    );
}