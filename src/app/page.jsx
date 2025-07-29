import React from 'react';
import styles from './page.module.css';

const LimitarTexto = (texto, limite, final = '...') => {
    if (texto.length <= limite) {
        return texto;
    }
    return texto.substring(0, limite) + final;
};

const App = () => {
    const usuario = null; // Simulate user session
    const nome = 'Visitante'; // Default name

    return (
        <div>
            <nav className={styles.navbarB}>
                <div className={styles.cont}>
                    {usuario && (
                        <div className={styles.hamburguerBtn} id="hamburguer-btn">
                            <i className='bx bx-menu'></i>
                        </div>
                    )}

                    <div id="menu-container">
                        {usuario === 2 ? (
                            <nav className={styles.sidebar} id='sidebar'>
                                <div className={styles.nome}>
                                    <li>
                                        <a href='#'>
                                            <span className={styles.linkName}>{nome}</span>
                                        </a>
                                    </li>
                                    <div className={styles.menu} id='menu-toggle'>
                                        <i className='bx bx-menu'></i>
                                    </div>
                                </div>
                                <ul className={styles.navList}>
                                    <li className={styles.fix}>
                                        <a href='#'>
                                            <i className='bx bx-home-alt-2'></i>
                                            <span className={styles.linkName}>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='bx bx-user'></i>
                                            <span className={styles.linkName}>Livrarias</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='bx bx-user-pin'></i>
                                            <span className={styles.linkName}>Resenhistas</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='bx bx-book-bookmark'></i>
                                            <span className={styles.linkName}>Livros</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='bx bx-book-content'></i>
                                            <span className={styles.linkName}>Usuários</span>
                                        </a>
                                    </li>
                                    <li className={styles.sair}>
                                        <a href='#'><i className='bx bx-log-out'></i></a>
                                    </li>
                                </ul>
                            </nav>
                        ) : (
                            <nav className={styles.sidebar} id='sidebar'>
                                <div className={styles.nome}>
                                    <li className={styles.logoName}>
                                        <a href='#'>
                                            <img src="adm/imagens/resenhistas/default.jpg" alt='Foto de perfil' className={styles.profileImage} />
                                            <span className={styles.linkName}>{nome}</span>
                                        </a>
                                    </li>
                                    <div className={styles.menu} id='menu-toggle'>
                                        <i className='bx bx-menu'></i>
                                    </div>
                                </div>
                                <ul className={styles.navList}>
                                    {usuario === 1 && (
                                        <li>
                                            <a href='#'>
                                                <i className='bx bx-user'></i>
                                                <span className={styles.linkName}>Anúncios</span>
                                            </a>
                                        </li>
                                    )}
                                    <li>
                                        <a href='#'>
                                            <i className='bx bx-user'></i>
                                            <span className={styles.linkName}>Criar resenhas</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='bx bx-user-pin'></i>
                                            <span className={styles.linkName}>Minhas resenhas</span>
                                        </a>
                                    </li>
                                    <li className={styles.sair}>
                                        <a href='#'><i className='bx bx-log-out'></i></a>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>
                    <a href="#sec1">
                        <img src="logo.png" alt="Logo do site" className={styles.logo} />
                    </a>
                </div>
                <div className={styles.links}>
                    <a href='#'>Login</a>
                    <a className={styles.active} href="#">Home</a>
                    <a href="#">Resenhas</a>
                    <a href="#">Autores</a>
                    <a href="#">Livros</a>
                    <a href="#">Sobre</a>
                </div>
            </nav>

            <section className={styles.tela1} id="sec1">
                <div className={styles.letreiro}>
                    <h3 className={styles.nome1}>Bibliófilos</h3>
                    <h3 className={styles.nome2}>COMMUNITY</h3>
                </div>

                <div className={styles.carrossel}>
                    <div className={styles.changeText}>
                        <h3>
                            <span className={styles.word}>“Um livro é um sonho que você segura nas mãos.” – Neil Gaiman</span>
                            <span className={styles.word}>“Os livros são os amigos mais silenciosos e constantes.” – Charles W. Eliot</span>
                            <span className={styles.word}>“Um quarto sem livros é como um corpo sem alma.” – Cícero</span>
                            <span className={styles.word}>“Os livros são uma magia portátil única.” – Stephen King</span>
                            <span className={styles.word}>“A leitura de um bom livro é um diálogo incessante.” – André Maurois</span>
                        </h3>
                    </div>
                </div>
            </section>

            <section className={styles.tela2} id="sec2">
                <div className={styles.destaques}>
                    <div>
                        <a href="#">
                            <div className={`${styles.card} ${styles.destaqueGrande}`}>
                                <img src="adm/imagens/livros/default.jpg" alt="" />
                                <p>Título da Resenha 1</p>
                            </div>
                        </a>
                        <div>
                            <a href="#">
                                <div className={`${styles.card} ${styles.destaqueMedio}`}>
                                    <img src="adm/imagens/livros/default.jpg" alt="" />
                                    <p>Título da Resenha 2</p>
                                </div>
                            </a>
                            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '8px' }}>
                                <a href="#">
                                    <div className={`${styles.card} ${styles.destaquePequeno}`}>
                                        <img src="adm/imagens/livros/default.jpg" alt="" />
                                        <p>Título da Resenha 3</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className={`${styles.card} ${styles.destaquePequeno}`} style={{ marginTop: '.5rem' }}>
                                        <img src="adm/imagens/livros/default.jpg" alt="" />
                                        <p>Título da Resenha 4</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href="#">
                                <div className={`${styles.card} ${styles.destaqueMedio}`}>
                                    <img src="adm/imagens/livros/default.jpg" alt="" />
                                    <p>Título da Resenha 5</p>
                                </div>
                            </a>
                            <a href="#">
                                <div className={`${styles.card} ${styles.destaqueMedio}`}>
                                    <img src="adm/imagens/livros/default.jpg" alt="" />
                                    <p>Título da Resenha 6</p>
                                </div>
                            </a>
                        </div>
                        <a href="#">
                            <div className={`${styles.card} ${styles.destaqueGrande}`}>
                                <img src="adm/imagens/livros/default.jpg" alt="" />
                                <p>Título da Resenha 7</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <footer className={styles.siteFooter}>
                <div className={styles.footerLogo}>
                    <img src="logo.png" alt="Logo do site" />
                </div>

                <div className={styles.footerTexto}>
                    <h3>Participe da nossa comunidade.</h3>
                    <p>Se torne um resenhista.</p>
                    <p>Entre em contato já!</p>
                </div>

                <div className={styles.footerRedes}>
                    <a href="#" target="_blank" aria-label="Twitter"><i className='bx bxl-twitter' style={{ color: '#fff' }}></i></a>
                    <a href="#" target="_blank" aria-label="Instagram"><i className='bx bxl-instagram' style={{ color: '#fff' }}></i></a>
                    <a href="#" target="_blank" aria-label="TikTok"><i className='bx bxl-tiktok' style={{ color: '#fff' }}></i></a>
                </div>
            </footer>
        </div>
    );
};

export default App;
