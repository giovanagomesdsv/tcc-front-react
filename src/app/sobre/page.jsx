import styles from "./page.module.css";
import Link from "next/link";

export default function Sobre() {
    return (
        <div className="container">

        <div className="navbar">
        <img src='imagem.png' alt="img.png" className="navlinkstyle" />
        <Link href={"/link"} className="navlinkstyle">Login</Link>
        <Link href={"#"} className="navlinkstyle">Home</Link>
        <Link href="#" className="navlinkstyle2">Resenhas</Link>
        <Link href={"#"} className="navlinkstyle">Autores</Link>
        <Link href={"#"} className="navlinkstyle">Livros</Link>
        <Link href={"#"} className="navlinkstyle fix2">Sobre</Link>
      </div>
      <br /><br />

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          <h1>Resenhistas</h1>
        </div>
        <hr style={{ width: '100%', border: '1px solid #ccc' }} />
      </div>

      <div className={styles.boxResenhistas}>
        <img src="/resenhista1.jpg" alt="Resenhista 1" className={styles.imgResenhista} />
        <div className={styles.boxResenhistasTexto}>
            <h1 className={styles.resenhistaNome}>Malfoy</h1>
            <h3 className={styles.ResenhaQuantTexto}>Resenhas: ?</h3>
        </div>
        <div className={styles.footerRedes}>
            <a
            href="https://instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="bx bxl-instagram"
            aria-label="Instagram"
          ></a>
        </div>
      </div>

      <div className={styles.boxResenhistas}>
        <img src="/resenhista1.jpg" alt="Resenhista 1" className={styles.imgResenhista} />
        <div className={styles.boxResenhistasTexto}>
            <h1 className={styles.resenhistaNome}>AtticusR</h1>
            <h3 className={styles.ResenhaQuantTexto}>Resenhas: ?</h3>
        </div>
        <div className={styles.footerRedes}>
            <a
            href="https://instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="bx bxl-instagram"
            aria-label="Instagram"
          ></a>
        </div>
      </div>

      <div className={styles.boxResenhistas}>
        <img src="/resenhista1.jpg" alt="Resenhista 1" className={styles.imgResenhista} />
        <div className={styles.boxResenhistasTexto}>
            <h1 className={styles.resenhistaNome}>LisBennet</h1>
            <h3 className={styles.ResenhaQuantTexto}>Resenhas: ?</h3>
        </div>
        <div className={styles.footerRedes}>
            <a
            href="https://instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="bx bxl-instagram"
            aria-label="Instagram"
          ></a>
        </div>
      </div>

    <footer className="siteFooter">
        {/* Logo redonda no canto esquerdo */}
        <div className="footerLogo">
          <img src="/logo.png" alt="Logo do site" className="footerLogo" />
        </div>

        {/* Texto centralizado */}
        <div>
          <h3>Participe da nossa comunidade.</h3>
          <br />
          <p className="footerTexto">Se torne um resenhista.<br /><br />Entre em contato já!</p>
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