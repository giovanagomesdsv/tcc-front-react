import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return ( 
    <div className="container">
    
    <div className={styles.navbar}>
      <img src='imagem.png' alt="img.png"/>
      <Link href={"/login"}  className={styles.navlinkstyle}>Login</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Home</Link>
      <Link href={"/resenhas"} className={styles.navlinkstyle}>Resenhas</Link>
      <Link href={"/autores"} className={styles.navlinkstyle}>Autores</Link>
      <Link href={"/livros"} className={styles.navlinkstyle}>Livros</Link>
      <Link href={"/sobre"} className={styles.navlinkstyle}>Sobre</Link>
    </div>
    <div className={styles.tela1}>
      <section className={styles.tela1} id="sec1"/>
                <div className={styles.letreiro}>
                    <h3 className={styles.nome1}>Bibliófilos</h3>
                    <h3 className={styles.nome2}>COMMUNITY</h3>
                </div>
    </div>

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
    </div>
  );
}