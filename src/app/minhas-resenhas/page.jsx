import styles from "./page.module.css";

export default function MResenhas() {
  return (
    <div className="container">

      <header style={{ justifyContent: 'left'}}>
        <p style={{ marginLeft: "10rem" }}>BACKSTAGE Community</p>
      </header>

          <div className={styles.containerResenhaBusca}>
          <div className={styles.contador}>
            <p className={styles.contadorBox}>
              Resenhas publicadas: <span className={styles.contadorNumero}>0</span>
            </p>
          </div>

          <div className="buscacontainer">
            <form action="" method="GET" className="buscaform">
              <input type="text" name="busca" placeholder="nome do resenhista" />
              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>
    <div className={styles.resenhasContainer}>
        <div className={styles.resenhaBox}>
        <div className={styles.resenhaImgEBox}>
          <img src="resenhafoto.png" className={styles.resenhaImg} alt="Capa do livro" />

          <div className={styles.resenhaTextoBox}>
            <p className={styles.tituloResenha}>Título do livro</p>
            <p className={styles.sinopseResenha}>Sinopse do livro</p>
          </div>
        </div>

        <div className={styles.resenhaBotoes}>
          <button className={styles.btn}><a href="/minhas-resenhas/abrir" className={styles.btnLink}><p className={styles.btnTexto}>ABRIR</p></a></button>
          <button className={styles.btn}><p className={styles.btnTexto}>STATUS:</p></button>
          <button className={styles.btn}><a href="/minhas-resenhas/atualizar" className={styles.btnLink}><p className={styles.btnTexto}>ATUALIZAR</p></a></button>
        </div>
      </div>

      <div className={styles.resenhaBox}>
        <div className={styles.resenhaImgEBox}>
          <img src="resenhafoto.png" className={styles.resenhaImg} alt="Capa do livro" />

          <div className={styles.resenhaTextoBox}>
            <p className={styles.tituloResenha}>Título do livro</p>
            <p className={styles.sinopseResenha}>Sinopse do livro</p>
          </div>
        </div>

        <div className={styles.resenhaBotoes}>
          <button className={styles.btn}><p className={styles.btnTexto}>ABRIR</p></button>
          <button className={styles.btn}><p className={styles.btnTexto}>STATUS:</p></button>
          <button className={styles.btn}><p className={styles.btnTexto}>ATUALIZAR</p></button>
        </div>
      </div>
    </div>

    </div>

  );
}
