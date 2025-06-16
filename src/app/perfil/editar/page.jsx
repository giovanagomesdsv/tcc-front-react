import styles from './page.module.css';

export default function Editar() {
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

        <div className="editarperfilcontainer">
            <h1>Editar Perfil</h1>
            <form method="POST">
                <div className="formgroup">
                    <label>Nome:</label>
                    <input type="text" name="nome" required/>
                </div>
                <div className="formgroup">
                    <label>Email:</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="formgroup">
                    <label>Nova senha:</label>
                    <input type="password" name="senha" placeholder="Deixe em branco para manter a mesma senha"/>
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
          
            <Link href="perfil.php">Voltar ao perfil</Link>
        </div>
    </main>
        </div>
    )
}