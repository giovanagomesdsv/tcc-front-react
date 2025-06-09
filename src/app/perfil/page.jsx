
import styles from './page.module.css';

    
export default function Perfil() {
    return (
      <div className={styles.container}>
        <h1>Perfil</h1>
  
        <header>
          Administrador BC
        </header>
  
        <nav className="sidebar" id="sidebar">
          <ul className="nav-list">
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
                <span className="link_name">Bibliófilos Community</span>
              </a>
            </li>
  
            <li>
              <a href="../home.php">
                <i className="bx bx-home-alt-2"></i>
                <span className="link_name">Home</span>
              </a>
            </li>
  
            <li>
              <a href="../livrarias/livrarias.php">
                <i className="bx bx-user"></i>
                <span className="link_name">Livrarias</span>
              </a>
            </li>
  
            <li>
              <a href="../resenhistas/resenhistas.php">
                <i className="bx bx-user-pin"></i>
                <span className="link_name">Resenhistas</span>
              </a>
            </li>
  
            <li>
              <a href="../livro/livros.php">
                <i className="bx bx-book-bookmark"></i>
                <span className="link_name">Livros</span>
              </a>
            </li>
  
            <li>
              <a href="../usuarios/usuarios.php">
                <i className="bx bx-book-content"></i>
                <span className="link_name">Usuarios</span>
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
            <a href="/editar-perfil">Editar perfil</a>
          </div>
        </main>
      </div>
    
  );
}
