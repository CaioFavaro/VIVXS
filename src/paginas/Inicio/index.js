import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";
import fluxo from 'assets/fluxo.png';
import PostModelo from "componentes/PostModelo";
import problema from 'assets/Problema.png';
import BotaoPrincipal from "componentes/BotaoPrincipal"; 
import caio from 'assets/caio.png';
import caiocode from 'assets/caio_code.png';
import ana from 'assets/ana.jpg';
import anacode from 'assets/ana_code.png';
import thi from 'assets/thi.jpg';
import thicode from 'assets/thi_code.png';
import yas from 'assets/yas.jpg';
import yascode from 'assets/yascode.jpg';

export default function Inicio() {
    const teamMembers = [
        {
            name: 'Thiemi Soubhia',
            role: 'Arquiteta de Software',
            image: thi, 
            qrCode: thicode
        },
        {
            name: 'Yasmim Rodrigues',
            role: 'Product Owner',
            image: yas,
            qrCode: yascode
        },
        {
            name: 'Ana Flávia',
            role: 'Desenvolvedora Full Stack',
            image: ana,
            qrCode: anacode
        },
        {
            name: 'Caio',
            role: 'User Experience Design',
            image: caio,
            qrCode: caiocode
        }
    ];

    // Função para rolar até o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <PostModelo >

            <div id="problema">
                <h3 className={styles.subtitulo}>Problemas</h3>
                <p className={styles.paragrafo}>
                    A Vivo enfrenta desafios com sistemas legados fragmentados, que tornam o aplicativo "Vivinho" lento e propenso a erros. Essa falta de integração resulta em má experiência do usuário e altos custos operacionais. O objetivo é melhorar a comunicação entre os sistemas, tornando-a mais ágil e eficiente, sem substituí-los.
                </p>
                <div className={styles.containerProblema}>
                <ul className={styles.lista}>
                    <li>Segregação de Clientes</li>
                    <li>Tempo de Resposta crítico</li>
                    <li>Degradação de serviço</li>
                    <li>Bases de Dados segregadas e heterogêneas</li>
                </ul>
                <img className={styles.problema} src={problema} alt="Problemas identificados" />
            </div>
            </div>

            <h3 className={styles.subtitulo} id="solucao">Fluxo da Solução</h3>
            <div className={styles.imagens}>
                <img className={styles.fluxo} src={fluxo} alt="Fluxograma" />
            </div>

            <div className={styles.bloco} >
                <ul className={styles.lista}>
                    <li>Falha de um dos banco de dados: Detecção automática → Uso das réplicas do SL → uso de Logs de transação → Corrigida a falha → Reintegrado.</li>
                    <li>Alertas e Monitoriamento em todo o ecossistema.</li>
                    <li>Sobrecarga de tráfego: Circuit Break , autoescalabilidade e distribuição de carga.</li>
                    <li>Criptografia de dados.</li>
                    <li>Falha no Broker de Mensagens: Requisição enviada diretamente ao Data Mesh.</li>
                    <li>Falha no Middleware de Integração: Alterações gravadas no Log de Transação.</li>
                </ul>
            </div>

            <h3 className={styles.subtitulo}>Porque escolher o DataMesh?</h3>
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

            <div className={styles.linksContainer}>
                <h3 className={styles.subtitulo}>Links</h3>
                <div className={styles.botaoContainer}>
                    <a href="https://github.com/thiemisoubhia/vivx" target="_blank" rel="noopener noreferrer">
                        <BotaoPrincipal tamanho="lg">GitHub</BotaoPrincipal>
                    </a>
                    <Link to="/projeto" onClick={scrollToTop}>
                        <BotaoPrincipal tamanho="lg">Projeto</BotaoPrincipal>
                    </Link>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiYmU2MjA3OWMtMjY4OC00MWM2LThkNjktOTI3Y2IwMGFlZDU4IiwidCI6IjExZGJiZmUyLTg5YjgtNDU0OS1iZTEwLWNlYzM2NGU1OTU1MSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
                    <BotaoPrincipal tamanho="lg" disabled>Dashboard </BotaoPrincipal>
                </a>
                </div>
            </div>

            <div className={styles.bloco} id="detalhamento">
                <h3 className={styles.subtitulo}>Detalhamento</h3>
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.container} id="contato">
                <h1 className={styles.titulo}>Equipe</h1>
                <div className={styles.team}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.member}>
                            <img src={member.image} alt={member.name} className={styles.photo} />
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                            <img src={member.qrCode} alt={`QR Code de ${member.name}`} className={styles.qrCode} />
                        </div>
                    ))}
                </div>
            </div>
        </PostModelo>
    );
}
