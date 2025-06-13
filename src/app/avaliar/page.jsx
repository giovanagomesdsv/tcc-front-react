import Link from "next/link";
import styles from './page.module.css';

export default function PaginaExemplo() {
  return (
    <div className={styles.container}>

  <header>
    Administrador BC
  </header>
  {/* NAVBAR */}
  <nav className="sidebar" id="sidebar">
          <ul className="navlist">
            <div className="nome">
              <li className="usuario">
                <div className="fix"></div>
              </li>
              <div className="menu" id="menu">
                <i className="bxbxmenu"></i>
              </div>
            </div>
  
            <li>
              <a href="../../index.php">
                <i className="bxbxreplystroke"></i>
                <span className="linkname">Bibliófilos Community</span>
              </a>
            </li>
  
            <li>
              <a href="../home.php">
                <i className="bxbxhomealt2"></i>
                <span className="linkname">Home</span>
              </a>
            </li>
  
            <li>
              <a href="../livrarias/livrarias.php">
                <i className="bxbxuser"></i>
                <span className="linkname">Livrarias</span>
              </a>
            </li>
  
            <li>
              <a href="../resenhistas/resenhistas.php">
                <i className="bxbxuserpin"></i>
                <span className="linkname">Resenhistas</span>
              </a>
            </li>
  
            <li>
              <a href="../livro/livros.php">
                <i className="bxbxbookbookmark"></i>
                <span className="linkname">Livros</span>
              </a>
            </li>
  
            <li>
              <a href="../usuarios/usuarios.php">
                <i className="bxbxbookcontent"></i>
                <span className="linkname">Usuarios</span>
              </a>
            </li>
  
            <li className="../sair">
              <a href="logout.php">
                <i className="bxbxlogout"></i>
              </a>
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