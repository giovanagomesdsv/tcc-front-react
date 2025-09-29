import styles from "./page.module.css";
import Link from "next/link";

export default function Livros() {
    return(
        <div className="container">

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