import styles from "./page.module.css";

export default function Autor() {
    return (
        <div className="container">

            <header className={styles.headerStyle}></header>
            
            <div className={styles.sec1}>
            <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem3} />
            </div>
            
            <div className={styles.sec2}>
                <h1>Nome do Autor</h1>
            </div>

        </div>
    )
}