import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>

      <Link href={"/login"}>Login</Link>
      <Link href={"#"}>Home</Link>
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
    </div>
  );
}
