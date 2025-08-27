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

<footer className="siteFooter">
    {/* Logo redonda no canto esquerdo */}
    <div className="footerLogo">
        <img src="/logo.png" alt="Logo do site" className="footerLogo"/>
    </div>

    {/* Texto centralizado */}
    <div>
    <h3>Participe da nossa comunidade.</h3>
    <br/>
    <p className="footerTexto">Se torne um resenhista.<br/><br/>Entre em contato já!</p>
    </div>

    {/* Ícones das redes sociais no canto direito */}
    <div className="footerRedes">
            <a
                href="https://twitter.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="bx bxl-twitter"
                aria-label="Twitter"
            ></a>

            <a
                href="https://instagram.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="bx bxl-instagram"
                aria-label="Instagram"
            ></a>

            <a
                href="https://tiktok.com/@seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="bx bxl-tiktok"
                aria-label="TikTok"
            ></a>
        </div>
</footer>


        </div>
    )
}