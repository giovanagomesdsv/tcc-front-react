
import styles from './page.module.css';
import Link from "next/link";

export default function CriarResenha() {
    return (
        <div className="container">

            <header>
                BACKSTAGE Community
            </header>
            <nav className="sidebar" id="sidebar">
                <ul className="navlist">

                    <li>  {/*PRECISA ADAPTAR A FOTO DE PERFIL AINDA, PRECISA DO BACKEND */}
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
                        <Link href="/anuncios" className="linkname">
                            <i className="bx bx-user"></i>
                            <span className="linkname">anuncios</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/criar-resenha" className="linkname fix">
                            <i className="bx  bx-pencil-circle"></i>
                            <span className="linkname">criar resenhas</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/minhas-resenhas" className="linkname">
                            <i className="bx bx-book-bookmark"></i>
                            <span className="linkname">minhas resenhas</span>
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
                        <input type="text" name="busca" placeholder="nome do usuário" />
                        <button type="submit"><i className='bx bx-search'></i></button>
                    </form>
                </div>
                <div className={styles.pesquisa}>

                    <div className="card">
                        <div className={styles.cont}>
                            <img src='../../adm/imagens/livros/$foto' alt='' />
                            <div>
                                <h2 className={styles.h2}>$titulo</h2>
                                <p className={styles.p}>$sinopse</p>
                            </div>
                        </div>
                        <div>
                            <Link href="/criar-resenha">{/*PRECISA DE LINKAR COM  A IMAGEM*/}

                                <button className={styles.button}>Criar Resenha</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.boxcard}>
                        <div className="card">
                            <div className={styles.cont}>
                                <img src='../../adm/imagens/livros/$foto' alt='' />
                                <div>
                                    <h2 className={styles.h2}>$titulo</h2>
                                    <p className={styles.p}>$sinopse </p>
                                </div>
                            </div>
                            <div>
                                <Link href={"/criar-resenha/cria"}>   {/*id=${idLivro}    ESSA É A  VARIAVEL DO ID DO LIVRO QUE PRECISA COLOCAR QUANDO IMPLEMENTAR O BACKEND, É SO COLOCAR DE VOLTA NO LIMK QUE JA FUNCIONA*/}
                                    <button className={styles.button1}>Criar Resenha</button>
                                </Link>


                             
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div >
    )
}