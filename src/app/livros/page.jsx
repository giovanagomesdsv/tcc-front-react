import styles from "./page.module.css";
import Link from "next/link";

export default function Livros() {
    return(
        <div className="container">
            {/* Header */}
                    <div className="navbar">
                        <img src='imagem.png' alt="img.png" className="navlinkstyle"/>
                        <Link href={"/link"}  className="navlinkstyle">Login</Link>
                        <Link href={"#"} className="navlinkstyle">Home</Link>
                        <Link href="#" className="navlinkstyle2 fix2">Resenhas</Link>
                        <Link href={"#"} className="navlinkstyle">Autores</Link>
                        <Link href={"#"} className="navlinkstyle">Livros</Link>
                        <Link href={"#"} className="navlinkstyle">Sobre</Link>
                    </div>
                    <br/><br/>
            {/* Cards e Filtragem */}

            <div className={styles.container}>
                <div className={styles.boxFilter}>
                    <h3>Preço</h3>
                    <p><input type="checkbox"/> Até R$20</p>
                    <p><input type="checkbox"/> R$20 a R$40</p>
                    <p><input type="checkbox"/> R$40 a R$60</p>
                    <p><input type="checkbox"/> R$80 a R$100</p>
                    <p><input type="checkbox"/> Mais de R$100</p>
                    <br/><br/>
                    <h3>classificação</h3>
                    <p><input type="checkbox"/> Livre</p>
                    <p><input type="checkbox"/> 10+</p>
                    <p><input type="checkbox"/> 12+</p>
                    <p><input type="checkbox"/> 16+</p>
                    <p><input type="checkbox"/> 18+</p>
                    <br/><br/>
                    <button>filtrar</button>
                </div>

                <div className={styles.boxLivros}>
                    
                    <div className={styles.cardLivro}>
                        
                    </div>

                </div>
            </div>


            {/* Footer */}
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