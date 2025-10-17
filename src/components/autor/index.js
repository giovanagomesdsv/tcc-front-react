'use client'

import styles from './page.module.css';
import Image from 'next/image';

export default function Autor({ autor }) {
    return (
        <div className="container">

            <header className={styles.headerStyle}></header>

            <div className={styles.displayContainer}>
                <div className={styles.sec1}>
                    <Image className={styles.image}
                        src={autor.aut_foto}
                        alt={autor.aut_nome}
                        width={100}
                        height={100}
                    />
                </div>

                <div className={styles.sec2}>
                    <h1 className={styles.tituloAutor}>{autor.aut_nome}</h1>
                    <p className={styles.bio}>{autor.aut_bio}</p>
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