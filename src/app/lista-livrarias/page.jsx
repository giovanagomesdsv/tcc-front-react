import styles from "./page.module.css";
import Link from "next/link";
import Link from "next/link";

export default function ListaLivrarias() {
    return (
        <div className="container">
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
                    <div className="busca-container">
                        <form action="" method="GET" className="busca-form">
                            <input type="text" name="busca" placeholder="nome do resenhista" />
                            <button type="submit"><i className='bx bx-search'></i></button>
                        </form>
                    </div>

                    <div className="pesquisa">

                        <div className={StyleS.card-liv}>

{/*isso é so um teste pra parar de dar erro, quando back-end ficar pronto precisa arrumar certinho */}
                            <Link href={whatsApp} /*var foto linkada no whatsapp*/target="_blank">
                                <img src={foto}  /*var foto da livraria*/alt="" />
                            </Link>
        {/*vai ate aq o teste, as proximas linhas a estrutura ta igual*/}

                            <p>nome{/*var nome*/}</p>
                            <p>email{/*var email*/}</p>
                            <p>cidade{/*var cidade e o estado*/}</p>
                            <div className="input">Total de Livros:{/*var qntd livro*/}
                            </div>
                        </div>
                    </div>
                    <h2>TODAS LIVRARIAS</h2>
                    <div className={styles.livrarias}>
                        {/*TODAS AS LIVRARIAS----------------------------------------------*/}


                        <div className={styles.card-liv}>
                            {/*isso é so um teste pra parar de dar erro, quando back-end ficar pronto precisa arrumar certinho */}
                            <Link href={whatsApp} /*var foto linkada no whatsapp*/target="_blank">
                                <img src={foto}  /*var foto da livraria*/alt="" />
                            </Link>
        {/*vai ate aq o teste, as proximas linhas a estrutura ta igual*/}
                        <p>{$nome}</p>
                        <p>{$email}</p>
                        <p>{$cidade} ({$estado})</p>
                        <div className="input">Total de Livros: {$total}</div>
                    </div>




            </div>
        </main>
        </div >
        </div >
    )
}