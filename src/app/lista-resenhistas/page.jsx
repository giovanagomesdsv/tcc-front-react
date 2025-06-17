import styles from "./page.module.css";
import Link from "next/link";


export default function ListaResenhas() {
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
            <Link href="/lista-livrarias" className="linkname">
              <i className="bx bx-user"></i>
              <span className="linkname">Livrarias</span>
            </Link>
          </li>

          <li>
            <Link href="/lista-resenhistas" className="linkname fix">
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
        <div className="buscacontainer">
          <form action="" method="GET" className="buscaform">
            <input type="text" name="busca" placeholder="pseudonimo do resenhista" />
            <button type="submit"><i className='bx bx-search'></i></button>
          </form>
        </div>
        


          <div className={styles.resenhistabox}>
            <div className={styles.resenhistainfo}>
              {/* IMAGEM DO RESENHISTA LINKADO COM TELEFONE
              <a href='https://wa.me/{$telefone}?text={$mensagem}' target='_blank'>
                <img class='imagem' src='../imagens/resenhistas/$foto' alt=''>
              </a>
              */}
            </div>
            <div className={styles.cardtext}>
              <p>Nome usuario: VAR</p>
              <p><strong>Pseudônimo: VAR</strong></p>
              <p><strong>Título: VAR</strong> </p>
            </div>
            <div className={styles.resenhacontador}>
              <p>Total de resenhas:</p>
              VAR totalResenhas
            </div>
          </div>
        <div className={styles.resenhistabox}>
          <div className={styles.resenhistainfo}>
            {/*IMAGEM DO RESENHISTA LINKADO COM TELEFONE
            <a href='https://wa.me/{$telefone}?text={$mensagem}' target='_blank'>
              <img class='imagem' src='../imagens/resenhistas/$foto' alt=''>
            </a>
            */}
          </div>
          <div className={styles.cardtext}>
            <p>Nome usuario VAR</p>
            <p><strong>Pseudônimo: VAR</strong></p>
            <p><strong>Título: VAR</strong></p>
          </div>
          <div className={styles.resenhacontador}>
            <p>Total de resenhas:</p>
            VAR totalResenhas
          </div>
        </div>
        </main >
    </div>
    
       
    )
}