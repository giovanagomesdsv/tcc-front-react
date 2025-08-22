import styles from "./page.module.css";

export default function Resenha() {
    return (
    <div className="container">
        <header className={styles.headerStyle}>text</header>
            {/*Div à direita*/}
        <div className={styles.sec1}>
            <img src="/images/img1.jpg" alt="Imagem 1" />
            <br/>
            <img src="/images/img2.jpg" alt="Imagem 2" />
        </div>
    </div>
    )
}