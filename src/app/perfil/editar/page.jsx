import styles from "./page.module.css";
import Link from "next/link";

export default function Editar() {
  return (
    <div className="container">
      <header>
        BACKSTAGE Community
      </header>
      <nav className="sidebar" id="sidebar">
        <ul className="navlist">

          <li>
            <Link href="/perfil" className="linkname fix">
              <i className="bx bx-home-alt-2"></i>
              <span className="linkname">Perfil</span>
            </Link>
          </li>
          {/* icone de menu
            <div className="menu" id="menu">
              <i className="bx bx-menu"></i>
            </div>
            */}

          <li>
            <a href="/">
              <i className="bx bx-reply-stroke"></i>
              <span className="linkname">Bibliófilos Community</span>
            </a>
          </li>

          <li>
            <Link href="/avaliar" className="linkname">
              <i className="bx bx-home-alt-2"></i>
              <span className="linkname">Home</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-livrarias" className="linkname">
              <i className="bx bx-user"></i>
              <span className="linkname">Livrarias</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-resenhistas" className="linkname">
              <i className="bx bx-user-pin"></i>
              <span className="linkname">Resenhistas</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-livros" className="linkname">
              <i className="bx bx-book-bookmark"></i>
              <span className="linkname">Livros</span>
            </Link>
          </li>

          <li>
            <Link href="/usuarios" className="linkname">
              <i className="bx bx-book-content"></i>
              <span className="linkname">Usuários</span>
            </Link>
          </li>

          <li>
            <Link href="/login" className="linkname">
              <i className="bx bx-log-out"></i>
              <span className="linkname">Sair</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main>

        <div className={styles.editarperfilcontainer}>
          <h1>Editar Perfil</h1>
          <form method="POST">
            <div className={styles.formgroup}>
              <label>Nome:</label>
              <input type="text" name="nome" required />
            </div>
            <div className={styles.formgroup}>
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className={styles.formgroup}>
              <label>Nova senha:</label>
              <input type="password" name="senha" placeholder="Deixe em branco para manter a mesma senha" />
            </div>
            <button className={styles.botaosavechange} type="submit">Salvar Alterações</button>
          </form>

          <Link href={"/perfil"}>Voltar ao perfil</Link>
        </div>
      </main>
    </div>
  )
}