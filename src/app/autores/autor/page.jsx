import styles from "./page.module.css";

export default function Autor() {
    return (
        <div className="container">

            <header className={styles.headerStyle}></header>

            <div className={styles.displayContainer}>
            <div className={styles.sec1}>
                <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem} />
            </div>

            <div className={styles.sec2}>
                <h1 className={styles.tituloAutor}>Titulo do Autor</h1>
                <p className={styles.bio}>
                Aluísio Azevedo (1857-1913) foi um escritor naturalista brasileiro. Suas obras mais conhecidas são "O Cortiço" e "Casa de Pensão", abordando a vida urbana e as desigualdades sociais do Brasil.
                </p>
            </div>
            </div>
        </div>
    )
}