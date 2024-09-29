import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';


export default function Banner() {
    return (
        <div className={styles.banner} id="inicio">
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, a Todos!
                </h1>

                <p className={styles.paragrafo}>
                    Nesse espaço dedicamos a mostrar as informações sobre o nosso projeto.
                </p>

                <h1 className={styles.subtitulo}>
                    Inovação para conectar.
                </h1>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

               
            </div>
        </div>
    )
}