import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import problema from 'assets/Problema.png';

export default function Sobre() {
    return (
        <PostModelo>
            <div>
                <h3 className={styles.subtitulo}>
                    Problemas
                </h3>

                <p className={styles.paragrafo}>
                    A Vivo enfrenta desafios com sistemas legados fragmentados, que tornam o aplicativo "Vivinho" lento e propenso a erros. Essa falta de integração resulta em má experiência do usuário e altos custos operacionais. O objetivo é melhorar a comunicação entre os sistemas, tornando-a mais ágil e eficiente, sem substituí-los.
                </p>

                <ul>
                    <li>Segregação de Clientes</li>
                    <li>Tempo de Resposta crítico</li>
                    <li>Degradação de serviço</li>
                    <li>Bases de Dados segregadas e heterogêneas</li>
                </ul>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.problema}
                    src={problema}
                    alt="Problemas identificados"
                />
            </div>
        </PostModelo>
    );
}
