import Link from "next/link";
import styles from './page.module.css';

export default function PaginaExemplo() {
  return (
<div className="container">
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

  {/* INÍCIO DO SITE */}
  <div className={styles.header}>
        <span className={styles.mensagem}>Olá Usuário, seja bem vindo!</span>
      </div>
      <div className={styles.avaliar}>
        <div className={styles.textnotificaçao}> AVALIAR</div></div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p className={styles.inputText}>Livraria</p>
            <br />
            <br />
            <br />
            <p className={styles.inputText}>Usuario</p>
          </div>
          <Link href={"/avaliar/avaliacao-livraria"}>
          <button className={styles.botao}>Avaliar</button>
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p className={styles.inputText}>Livraria</p>
            <br />
            <br />
            <br />
            <p className={styles.inputText}>Usuario</p>
          </div>
          <Link href={"/avaliar/avaliacao-livraria"}>
          <button className={styles.botao}>Avaliar</button>
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p className={styles.inputText}>Resenhista</p>
            <br />
            <br />
            <br />
            <p className={styles.inputText}>Usuario</p>
          </div>
          <Link href={"/avaliar/avalicao-resenha"}>
          <button className={styles.botao}>Avaliar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}