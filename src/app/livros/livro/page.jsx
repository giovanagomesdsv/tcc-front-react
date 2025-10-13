import styles from "./page.module.css";

export default function Livro() {
    return (
    <div className="container">
            
        <div className={styles.containerLivro}>
                
            <div className={styles.espacoEsq}>
                <img src="/livro.png" className={styles.livroFoto} />
            </div>
            <div className={styles.espacoDir}>
                <h1>Livro</h1>
            </div>



        </div>

    </div>
    )
}