import Diagramas from "componentes/Diagramas";
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import Tecnologias from "componentes/Slide";




export default function Sobre() {
    return (
        <PostModelo>
            <h3 className={styles.subtitulo}>
                Problemas
            </h3>

            <p className={styles.paragrafo}>
            Atualmente, enfrentamos uma série de desafios críticos com o sistema. A segregação de clientes e a presença de bases de dados heterogêneas estão gerando dificuldades na gestão e integridade dos dados. O desempenho do sistema está sendo afetado pela latência elevada e pela degradação de serviço, o que compromete a alta disponibilidade e a resiliência necessárias. 
            </p>
            <p className={styles.paragrafo}>
            Além disso, o sistema enfrenta problemas de escalabilidade e falta de desacoplamento, dificultando a evolução contínua e a integração de novos recursos. O monitoramento atual é insuficiente para garantir a segurança e a integridade dos dados, tornando a manutenção e a adaptação do sistema mais complexas. Esses desafios precisam ser abordados para garantir um desempenho eficiente e uma operação estável e segura.
            </p>

            <h3 className={styles.subtitulo}>Diagramas</h3>
            <Diagramas />

            <br>
            </br>

            <h3 className={styles.subtitulo}>Tecnologias Usadas</h3>
            <Tecnologias />

        </PostModelo>

    )
}