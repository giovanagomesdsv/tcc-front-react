import Link from "next/link";
import styles from "./page.module.css";

export default function UsuariosPage() {
  return (
    <div className={styles.container}>
      <header>
        BACKSTAGE Community
      </header>
      <nav className="sidebar" id="sidebar">
        <ul className="navlist">

          <li>
            <Link href="/perfil" className="linkname">
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
            <Link href="/avaliar" className="linkname fix">
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

      <main className={styles.main}>
        {/* Barra de pesquisa */}
        <div className={styles.buscaContainer}>
          <Link href="/usuarios/cadastrar" legacyBehavior>
          <a className={styles.cadastrarbtn}>Cadastrar usuário</a>
          </Link>

          <form className={styles.buscaForm}>
            <input type="text" placeholder="Buscar por um usuário..." />
          </form>
        </div>

        {/* Contador de Usuários */}
        <div className={styles.contagemContainer}>
        <div className={styles.linha}>
          <p className={styles.label}>Resenhistas:</p>
        <p>3</p>
        </div>
        <div className={styles.linha}>
          <p className={styles.label}>Livrarias:</p>
          <p>3</p>
        </div>
        <div className={styles.linha}>
          <p className={styles.label}>Administradores:</p>
          <p>2</p>
        </div>
      </div>

        {/* Resultados de busca */}
        <div className={styles.pesquisa}>
          <div className={`${styles.card} ${styles.containerInput}`}>
            <p className={styles.inputID && styles.inputID2}>MARIANA ARISSA SAKAGUCHI</p>
            <div className={styles.containerBtnInput}>
              <p className={styles.inputID}>RESENHISTA</p>
            <Link href="/usuarios/editar/2" legacyBehavior>
              <a className={styles.cadastrarbtn}>ATUALIZAR</a>
            </Link>
            </div>
          </div>

          <div className={`${styles.card} ${styles.containerInput} ${styles.inativo}`}>
            <p className={styles.inputID && styles.inputID2}>CLEVERSON MARCELO A. DE MELO</p>
            <div className={styles.containerBtnInput}>
              <p className={styles.inputID}>LIVRARIA</p>
              <Link href="/usuarios/editar/2" legacyBehavior>
              <a className={styles.cadastrarbtn}>ATUALIZAR</a>
            </Link>
            </div>
          </div>

          {/* Você pode adicionar mais cards fixos como mockup visual */}
        </div>
      </main>
    </div>
  );
}