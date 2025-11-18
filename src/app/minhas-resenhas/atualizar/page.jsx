import styles from "./page.module.css";

export default function Atualizar() {
    return (

        
        <div className="container">
            <header><p className={styles.headerMargin}>BIBLIOFILOS Community</p></header>

            <div className={styles.resenhaAbrirBox}>
                <div className={styles.resenhaImgETexto}>
                    <img src="/resenhafoto.png" className={styles.resenhaImg} alt="Capa do livro" />

                    <div className={styles.resenhaTextoBox}>
                        <p className={styles.resenhaTitulo}>Título do livro</p>
                        <p className={styles.sinopseResenha}>Sinopse:</p>
                    </div>

                </div>
                    <p className={styles.TituloEResenhaText}>Titulo da resenha:</p>
                    <input type="text" className={styles.inputBoxTituloResenhaAtualizar}/>
                    <p className={styles.TituloEResenhaText}>Resenha:</p>
                    <textarea className={styles.inputBoxResenhaAtualizar} rows={8} />
                <p className={styles.resenhaAbrirAvaliar}>★★★★★</p>
                <div className={styles.resenhaPublicadoEAtualizado}>
                <p className={styles.PublicadoEAtualizadoText}>Publicado em:</p> <p className={styles.AtualizadoEPublicadoData}> 20/10/2023 04:22:32</p>
                </div>

                <div className={styles.resenhaPublicadoEAtualizado}>
                <p className={styles.PublicadoEAtualizadoText}>Publicado em:</p><p className={styles.AtualizadoEPublicadoData}> 20/10/2023 04:22:32</p>
                </div>

                <div>
                    <button className={styles.btn}><a href="/minhas-resenhas" className={styles.btnLink}><p className={styles.btnTexto}>VOLTAR</p></a></button>
                </div>

            </div>
        </div>
    )
}