
import styles from './page.module.css';
import Link from "next/link";
    
export default function Perfil() {
    return (
      <div className="container">
      
  
        <header>
        BACKSTAGE Community
                </header>
  
        <nav className="sidebar" id="sidebar">
          <ul className="navlist">
            <div className="nome">
              <li className="usuario">
                <div className="fix"></div>
              </li>
              <div className="menu" id="menu">
                <i className="bx bx-menu"></i>
              </div>
            </div>
  
            <li>
              <a href="../../index.php">
                <i className="bx bx-reply-stroke"></i>
                <span className="linkname">Bibliófilos Community</span>
              </a>
            </li>
  
            <li>
              <a href="../home.php">
                <i className="bx bx-home-alt-2"></i>
                <span className="linkname">Home</span>
              </a>
            </li>
  
            <li>
              <a href="../livrarias/livrarias.php">
                <i className="bx bx-user"></i>
                <span className="linkname">Livrarias</span>
              </a>
            </li>
  
            <li>
              <a href="../resenhistas/resenhistas.php">
                <i className="bx bx-user-pin"></i>
                <span className="linkname">Resenhistas</span>
              </a>
            </li>
  
            <li>
              <a href="../livro/livros.php">
                <i className="bx bx-book-bookmark"></i>
                <span className="linkname">Livros</span>
              </a>
            </li>
  
            <li>
              <a href="../usuarios/usuarios.php">
                <i className="bx bx-book-content"></i>
                <span className="linkname">Usuarios</span>
              </a>
            </li>
  
            <li className="../sair">
              <a href="logout.php">
                <i className="bx bx-log-out"></i>
              </a>
            </li>
          </ul>
        </nav>
  
        <main>
          <div className={styles.perfilcontainer}>
            <h1>Perfil do Usuário</h1>
            <p><strong>Nome:</strong></p>
            <p><strong>Email:</strong></p>
            <p><strong>Senha:</strong></p>
            <p><strong>Data de Criação:</strong></p>
            <p><strong>Status:</strong></p>
            <Link href={"/perfil/editar"}>Editar perfil</Link>

          </div>
        </main>
      </div>
    
  );
}
