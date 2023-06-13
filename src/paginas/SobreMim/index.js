import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/FotoPerfil.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Caio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Sistemas de informação e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
            Tenho muita vontade de aprender e Desenvolver minhas habilidades. Tenho estudado desenvolvendo projetos tanto Back-end quanto Front-end e tenho muito interesse em aplicações mobile .

            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Sistemas de informação, inicialmente cursei dois primeiros anos no (IFSP) de Votuporanga no interior de São Paulo.
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, em morar em um local novo.
            </p>
            <p className={styles.paragrafo}>
                Atualmente estudo na (FIAP) da aclimação, estou nesse exato momento no 6 semestre do curso, realmente estou quase lá.

            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Tinho tido grandes oportunidades de aprender tanto na faculade quanto nos cursos da alura que a faculdade disponibiliza!
            </p>
        </PostModelo>
    )
}