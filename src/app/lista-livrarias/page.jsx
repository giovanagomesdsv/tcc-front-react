import styles from "./page.module.css";
import Link from "next/link";

export default function ListaLivrarias() {
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
            <Link href="/avaliar" className="linkname">
              <i className="bx bx-home-alt-2"></i>
              <span className="linkname">Home</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-livrarias" className="linkname fix">
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

        {/*--EXIBE OS CARDS DAS LIVRARIAS----------*/}
        <div className="buscacontainer">
          <form action="" method="GET" className="buscaform">
            <input type="text" name="busca" placeholder="nome do resenhista" />
            <button type="submit"><i className='bx bx-search'></i></button>
          </form>
        </div>

      

          <div className={styles.cardliv}>


            {/*vai ate aq o teste, as proximas linhas a estrutura ta igual*/}
            
            
             {/*FOTO DA LIVRARIA*/} 
             <p className={styles.foto}>FOTO{/*var FOTO*/}</p> 
            <p>nome{/*var nome*/}</p>
            <p>email{/*var email*/}</p>
            <p>cidade{/*var cidade e o estado*/}</p>
            <div className="input">Total de Livros:{/*var qntd livro*/}
            </div>
          </div>
        
        <h2 className="textnotificaçao">TODAS LIVRARIAS</h2>
        <div className={styles.livrarias}>
          {/*TODAS AS LIVRARIAS----------------------------------------------*/}

          <div className={styles.cardliv}>


            {/*vai ate aq o teste, as proximas linhas a estrutura ta igual*/}
             {/*FOTO DA LIVRARIA*/} 
            <p className={styles.foto}>FOTO{/*var FOTO*/}</p> 
            <p>nome{/*var nome*/}</p>
            <p>email{/*var email*/}</p>
            <p>cidade{/*var cidade e o estado*/}</p>
            <div className="input">Total de Livros:{/*var qntd livro*/}
            </div>
          </div>



        </div>
      </main>


    </div>
  )
}

