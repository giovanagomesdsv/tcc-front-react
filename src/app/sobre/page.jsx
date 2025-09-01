import styles from "./page.module.css";
import Link from "next/link";
import clsx from 'clsx';

export default function Sobre() {
    return (
        <div className="container">
            <div className={styles.navbar}>
            <img src='imagem.png' alt="img.png" className={styles.navlinkstyle}/>
            <Link href={"/link"}  className={styles.navlinkstyle}>Login</Link>
            <Link href={"#"} className={styles.navlinkstyle}>Home</Link>
            <Link href={"#"} className={styles.navlinkstyle}>Resenhas</Link>
            <Link href={"#"} className={styles.navlinkstyle}>Autores</Link>
            <Link href={"#"} className={styles.navlinkstyle}>Livros</Link>
            <Link href="#" className={clsx(styles.navlinkstyle2, "fix2")}>Sobre</Link>
            </div>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <h1>Resenhistas</h1>
            </div>
            <hr style={{ width: '100%', border: '1px solid #ccc' }} />
        </div>

            <div className={styles.boxResenhista}>
            <div className={styles.cardRes}>
                <img src="/logo.png" alt="Logo do site" className={styles.imagem}/>
                
                {/* Novo container para os textos */}
                <div className={styles.info}>
                <h1>Malfoy</h1>
                <h2>resenhas: 7</h2>
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