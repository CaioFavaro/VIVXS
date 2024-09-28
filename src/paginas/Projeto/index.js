import Diagramas from 'componentes/Diagramas';
import styles from './Projeto.module.css';
import Tecnologias from 'componentes/Slide';

export default function Projeto() {
    return (
        <div className={styles.container}>
            
            <div className={styles.bloco}>
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
            </div>

            
            <div className={styles.bloco}>
                <h3 className={styles.titulo}>
                    Cliente Existente no Sistema Legado e no Data Mesh
                </h3>
                <ul className={styles.lista}>
                    <li>Cenário Futurista com Transição para o Data Mesh:</li>
                    <li>No Futuro, a maioria dos dados terá migrado para o Data Mesh. Usuários novos ou com dados no Data Mesh terão seu armazenamento focado nesse sistema.</li>
                    <li>Autenticação e Integração: O cliente faz uma solicitação para criar conta ou acessar informações.</li>
                    <li>API Gateway: Autentica a requisição e, caso falhe, informa o cliente.</li>
                    <li>Cache: Se os dados estão no cache, o fluxo termina. Caso contrário, a requisição segue.</li>
                    <li>Broker de Mensagens: Ordena e prioriza. Caso falhe, envia diretamente para o Data Mesh e retorna ao cliente.</li>
                    <li>Leitura e Escrita: São feitos diretamente no Data Mesh ou Sistema Legado. Verifica-se a leitura ou escrita de modo síncrono, garantindo integridade.</li>
                    <li>Middleware de Dados: Transforma e atualiza os dados no Data Mesh. Se falhar, as alterações são registradas no Log de Transação, e o administrador é alertado.</li>
                </ul>
            </div>
            <div className={styles.container}>
            <h3 className={styles.subtitulo}>Diagramas</h3>
            <Diagramas />
            </div>

            <div className={styles.container}>
            <h3 className={styles.subtitulo}>Tecnologias Usadas</h3>
            <Tecnologias />
            </div>
        </div>
  
        
            
    );

    
}
