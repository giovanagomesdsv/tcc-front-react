import styles from "./page.module.css";

export default function Resenha() {
    return (
    <div className="container">
        <header className={styles.headerStyle}>
            <h2>Atualizado:...</h2>
            <h2>Publicado:...</h2>
        </header>
            {/*Div à direita*/}
        <div className={styles.display}>
        <div className={styles.sec1}>
            <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imgStyle}/>
            <br/>
            <img src="/images/img2.jpg" alt="Imagem 2" className={styles.imgStyle}/>
            {/*Parte da Esquerda*/}
        </div>
        
        <div className={styles.sec2}>
            <h1>Titulo</h1>
            <p className={styles.textLivro}>Livro:livro</p>
            <h2 className={styles.textSinopse}>Sinopse:</h2>
            <p>⭐⭐⭐⭐⭐</p>
            <h2 className={styles.textSinopse}>Conteudo:</h2>
        <div className={styles.bottombar}></div>

            <div className={`${styles.resenhista} ${styles.footerRedes}`}>
                <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem}/>
                <div className={styles.resumo}>
                    <p>Perfil do resenhista</p>
                </div>
                <a
                href="https://instagram.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="bx bxl-instagram"
                aria-label="Instagram"
                ></a>
        </div>
        </div>
        
        </div>

        <footer className={styles.siteFooter}>
          {/* Logo redonda no canto esquerdo */}
          <div className={styles.footerLogo}>
            <img src="/logo.png" alt="Logo do site" className={styles.footerLogo}/>
          </div>
        
          {/* Texto centralizado */}
          <div>
          <h3>Participe da nossa comunidade.</h3>
          <br/>
          <p className={styles.footerTexto}>Se torne um resenhista.<br/><br/>Entre em contato já!</p>
          </div>
        
          {/* Ícones das redes sociais no canto direito */}
          <div className={styles.footerRedes}>
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