import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>

      <Link href={"/login"}>Login</Link>
      <Link href={"/livrarias"}>Livrarias</Link>
      <Link href={"/resenhistas"}>Resenhistas</Link>
      <Link href={"/livros"}>Livros</Link>
      <Link href={"/usuarios"}>Livros</Link>
    </div>
  );
}
