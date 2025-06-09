
import styles from './page.module.css';

    
export default function Perfil() {
    return (
      <div className="container">
      
  
        <header>
          Administrador BC
        </header>
  
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
  
        <main>
          <div className={styles.perfilcontainer}>
            <h1>Perfil do Usuário</h1>
            <p><strong>Nome:</strong></p>
            <p><strong>Email:</strong></p>
            <p><strong>Senha:</strong></p>
            <p><strong>Data de Criação:</strong></p>
            <p><strong>Status:</strong></p>
            <a href="/editarperfil">Editar perfil</a>
          </div>
        </main>
      </div>
    
  );
}
