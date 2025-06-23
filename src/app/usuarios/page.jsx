import Link from "next/link";
import styles from "./page.module.css";

export default function UsuariosPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        BACKSTAGE Community
      </header>

      <nav className={styles.sidebar} id="sidebar">
        <ul className={styles.navlist}>
          <li>
            <Link href="/perfil" className={styles.linkname}>
              <i className="bx bx-home-alt-2"></i>
              <span className={styles.linkname}>Perfil</span>
            </Link>
          </li>

          <li>
            <Link href="/" className={styles.linkname}>
              <i className="bx bx-reply-stroke"></i>
              <span className={styles.linkname}>Bibliófilos Community</span>
            </Link>
          </li>

          <li>
            <Link href="/avaliar" className={styles.linkname}>
              <i className="bx bx-home-alt-2"></i>
              <span className={styles.linkname}>Home</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-livrarias" className={styles.linkname}>
              <i className="bx bx-user"></i>
              <span className={styles.linkname}>Livrarias</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-resenhistas" className={styles.linkname}>
              <i className="bx bx-user-pin"></i>
              <span className={styles.linkname}>Resenhistas</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-livros" className={styles.linkname}>
              <i className="bx bx-book-bookmark"></i>
              <span className={styles.linkname}>Livros</span>
            </Link>
          </li>

          <li>
            <Link href="/usuarios" className={`${styles.linkname} ${styles.fix}`}>
              <i className="bx bx-book-content"></i>
              <span className={styles.linkname}>Usuários</span>
            </Link>
          </li>

          <li>
            <Link href="/login" className={styles.linkname}>
              <i className="bx bx-log-out"></i>
              <span className={styles.linkname}>Sair</span>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        {/* Barra de pesquisa */}
        <div className={styles.buscaContainer}>
          <div className={styles.botao}>
            <Link href="/usuarios/cadastrar">Cadastrar usuário</Link>
          </div>

          <form className={styles.buscaForm}>
            <input type="text" placeholder="nome do usuário" />
            <button type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        {/* Resultados de busca */}
        <div className={styles.pesquisa}>
          <div className={`${styles.card} ${styles.containerInput}`}>
            <p className={styles.input}>Nome do Usuário Exemplo</p>
            <div className={styles.containerBtnInput}>
              <p className={styles.inputID}>RESENHISTA</p>
              <Link href="/usuarios/editar/1">
                <div className={styles.botao}>ATUALIZAR</div>
              </Link>
            </div>
          </div>

          <div className={`${styles.card} ${styles.containerInput} ${styles.inativo}`}>
            <p className={styles.input}>Outro Usuário Inativo</p>
            <div className={styles.containerBtnInput}>
              <p className={styles.inputID}>LIVRARIA</p>
              <Link href="/usuarios/editar/2">
                <div className={styles.botao}>ATUALIZAR</div>
              </Link>
            </div>
          </div>

          {/* Você pode adicionar mais cards fixos como mockup visual */}
        </div>
      </main>
    </div>
  );
}