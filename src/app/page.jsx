import styles from "./page.module.css";
import Link from "next/link";
import clsx from 'clsx';
// import Slider from "@/components/slider";
import LivrosHome from "@/components/homelivrosBC";
import ClassicosBC from "@/components/classicosBC";
import SuspenseMisterioBC from "@/components/suspenseMisterioBC";
import FantasiaBC from "@/components/fantasiaBC";
import AventuraBC from "@/components/aventuraBC";
import HorrorBC from "@/components/horrorBC";
import RomanceBC from "@/components/romanceBC";
import FiccaoBC from "@/components/ficcaoBC";


export default function Home() {
  return (
    <div className="container">
      {/* <Slider /> */}
      <h1>Home</h1>

      <Link href={"/login"}>Login</Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/resenhas"}>Resenhas</Link>
      <Link href={"/autores"}>Autores</Link>
      <Link href={"/livros"}>Livros</Link>
      <Link href={"/sobre"}>Sobre</Link>

      <h1>Navegação</h1>

      <p>ADMINISTRADOR</p>
      <Link href={"/perfil"}>Perfil</Link>
      <Link href={"/avaliar"}>Avaliar</Link>
      <Link href={"/lista-livrarias"}>Livrarias</Link>
      <Link href={"/lista-resenhistas"}>Resenhistas</Link>
      <Link href={"/lista-livros"}>Livros</Link>
      <Link href={"/usuarios"}>Usuários</Link>
      <br />
      <p>LIVRARIAS</p>
      <Link href={"/anuncios"}>Anúncios</Link>
      <br />
      <p>RESENHISTAS E LIVRARIAS</p>
      <Link href={"/perfil"}>Perfil</Link>
      <Link href={"/criar-resenha"}>Criar Resenha</Link>
      <Link href={"/minhas-resenhas"}>Minhas Resenhas</Link>
      <div className={styles.navbar}>
        <img src='imagem.png' alt="img.png" className={styles.perfilstyle} />
        <Link href={"/login"} className={styles.navlinkstyle}>Login</Link>
        <Link href={"/"} className={styles.navlinkstyle}>Home</Link>
        <Link href={"/resenhas"} className={styles.navlinkstyle}>Resenhas</Link>
        <Link href={"/autores"} className={styles.navlinkstyle}>Autores</Link>
        <Link href={"/livros"} className={styles.navlinkstyle}>Livros</Link>
        <Link href={"/sobre"} className={styles.navlinkstyle}>Sobre</Link>
      </div>
      <div className={styles.tela1}>
        <section className={styles.tela1} id="sec1" />
        <div className={styles.letreiro}>
          <h3 className={styles.nome1}>Bibliófilos</h3>
          <h3 className={styles.nome2}>COMMUNITY</h3>
          <br /><br />
          <div className={styles.barra}><p>livros são sonhos que seguramos com as mãos</p></div>
        </div>
      </div>
      <LivrosHome />
      <main>
        <ClassicosBC />
        <HorrorBC />
        <SuspenseMisterioBC />
        <RomanceBC />
        <FantasiaBC />
        <AventuraBC />
        <FiccaoBC />
        <footer className={styles.siteFooter}>
          {/* Logo redonda no canto esquerdo */}
          <div className={styles.footerLogo}>
            <img src="/logo.png" alt="Logo do site" className={styles.footerLogo} />
          </div>

          {/* Texto centralizado */}
          <div>
            <h3>Participe da nossa comunidade.</h3>
            <br />
            <p className={styles.footerTexto}>Se torne um resenhista.<br /><br />Entre em contato já!</p>
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

      </main>


    </div>
  );
}