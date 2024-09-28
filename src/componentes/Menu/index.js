
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobre">
                    Problematica 
                </MenuLink>
                <MenuLink to="/solucao">
                    Solucao 
                </MenuLink>
                <MenuLink to="/projeto">
                    Projeto 
                </MenuLink>
                <MenuLink to="/contato">
                    Contato 
                </MenuLink>
                
            </nav>
        </header>
    )
}