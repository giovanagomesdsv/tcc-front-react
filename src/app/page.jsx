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

    </div>
  );
}
