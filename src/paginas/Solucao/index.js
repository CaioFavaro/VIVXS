import styles from "./Solucao.module.css";
import PostModelo from "componentes/PostModelo";
import fluxo from 'assets/fluxo.png';

export default function Sobre() {
    return (
        <PostModelo>

                <h3 className={styles.subtitulo}>
                    Fluxo da Solução
                </h3>

            <div className={styles.imagens}>
                <img
                    className={styles.fluxo}
                    src={fluxo}
                    alt="Fluxograma"
                />
            </div>
            <div>


                <div className={styles.bloco}>
                <ul className={styles.lista}>
                    <li>Falha de um dos banco de dados: Detecção automática → Uso das réplicas do SL → uso de Logs de transação → Corrigida a falha → Reintegrado.</li>
                    <li>Alertas e Monitoriamento em todo o ecossistema.</li>
                    <li>Sobrecarga de tráfego: Circuit Break ,autoestalabilidade e distribuição de carga.</li>
                    <li>Criptografia de dados.</li>
                    <li>Falha no Broker de Mensagens: Requisição enviada diretamente ao Data Mesh.</li>
                    <li>Falha no Middleware de Integração: Alterações gravadas no Log de Transação.</li>
                </ul>
            </div>
            </div>

            <h3 className={styles.subtitulo}>
                    Porque escolher o DataMesh?
                </h3>

            <div className={styles.conteudo}>
                <div className={styles.bloco}>
                    <h3 className={styles.subtitulo}>Desvantagens do uso de sistemas legados heterogêneos:</h3>
                    <ul className={styles.lista}>
                        <li>Complexidade operacional</li>
                        <li>Dificuldade de integração</li>
                        <li>Inconsistências nos dados</li>
                        <li>Alto custo de manutenção</li>
                        <li>Falta de visibilidade e controle centralizado</li>
                    </ul>
                </div>

                <div className={styles.divisor}></div>

                <div className={styles.bloco}>
                    <h3 className={styles.subtitulo}>Vantagens do Data Mesh:</h3>
                    <ul className={styles.lista}>
                        <li>Descentralização de Dados e autonomia</li>
                        <li>Escalabilidade</li>
                        <li>Resiliência</li>
                        <li>Governança de Dados focada</li>
                        <li>Redução de dependências</li>
                        <li>Acesso e compartilhamento de dados</li>
                    </ul>
                </div>
            </div>

            
        </PostModelo>
    );
}
