// src/paginas/Caso2/index.js
import { Link } from 'react-router-dom';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './Caso2.module.css';

export default function Caso2() {
    return (
        <div className={styles.container}>
            <h3 className={styles.titulo}>
                Cenário Futurista: com Transição para o Data Mesh
            </h3>
            <ul className={styles.lista}>
                <li>No Futuro, a maioria dos dados terá migrado para o Data Mesh. Usuários novos ou com dados no Data Mesh terão seu armazenamento focado nesse sistema.</li>
                <li>Autenticação e Integração: O cliente faz uma solicitação para criar conta ou acessar informações.</li>
                <li>API Gateway: Autentica a requisição e, caso falhe, informa o cliente.</li>
                <li>Cache: Se os dados estão no cache, o fluxo termina. Caso contrário, a requisição segue.</li>
                <li>Broker de Mensagens: Ordena e prioriza. Caso falhe, envia diretamente para o Data Mesh e retorna ao cliente.</li>
                <li>Leitura e Escrita: São feitos diretamente no Data Mesh ou Sistema Legado. Verifica-se a leitura ou escrita de modo síncrono, garantindo integridade.</li>
                <li>Middleware de Dados: Transforma e atualiza os dados no Data Mesh. Se falhar, as alterações são registradas no Log de Transação, e o administrador é alertado.</li>
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
