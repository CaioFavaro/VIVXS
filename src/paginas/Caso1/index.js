// src/paginas/Caso1/index.js
import { Link } from 'react-router-dom';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './Caso1.module.css';

export default function Caso1() {
    return (
        <div className={styles.container}>
            <h3 className={styles.titulo}>
                Cliente Existente no Sistema Legado e no Data Mesh
            </h3>
            <ul className={styles.lista}>
                <li>A migração para o Data Mesh está em andamento, então o cliente pode ter dados em ambos os sistemas ou apenas no Sistema Legado.</li>
                <li>Autenticação no App Vivinho: O cliente solicita seus atuais dados.</li>
                <li>API Gateway: Autentica e autoriza a requisição. Se falhar, o usuário é informado.</li>
                <li>Cache: Se os dados estiverem no cache, são retornados. Caso contrário, a requisição vai ao Broker de Mensagens.</li>
                <li>Broker de Mensagens: Prioriza as requisições. Se falhar, a requisição vai diretamente ao Data Mesh e retorna o resultado.</li>
                <li>Middleware de Dados: Decide se os dados vêm do Data Mesh ou do Sistema Legado, e atualiza o Data Mesh para futuras requisições.</li>
                <li>Middleware de Integração: Transforma os dados para garantir compatibilidade no Data Mesh. Se falhar, o Log de Transação é atualizado e o administrador é alertado.</li>
            </ul>

            <div className={styles.botaoContainer}>
                {/* Botão para voltar para a página Projeto */}
                <Link to="/projeto">
                    <BotaoPrincipal tamanho="lg">Voltar para Soluções</BotaoPrincipal>
                </Link>
            </div>
        </div>
    );
}
