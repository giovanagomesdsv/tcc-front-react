import styles from "./page.module.css";

export default function ReviewCard({ foto, titulo, sinopse, texto, autor, dado }) {
    return (
      <div>
      <div className={styles.avaliar}>
      <div className={styles.textnotificaçao}>AVALIAR LIVRARIA</div></div>
      <br/><br/>

        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardimgsinopse}>
            <div className={styles.sinopse}>
              <p className={styles.sinopseText}><strong>SINOPSE:</strong></p>
              <div className={styles.displayImageText}>
              <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className="imagem"
              />
              <div className={styles.infobox}>
                <h1 className={styles.inputTitles1}>Informações do administrador</h1>


                    <p className={styles.inputs}><strong>Nome:</strong></p>
                    <p className={styles.inputs}><strong>Email:</strong></p>

                    <h1 className={styles.inputTitles2}>Informações da Livraria</h1>

                    <p className={styles.inputs}><strong>Nome:</strong> </p>
                    <p className={styles.inputs}><strong>Email:</strong> </p>
                    <p className={styles.inputs}><strong>Cidade:</strong> </p>
                    <p className={styles.inputs}><strong>Estado:</strong> </p>
                    <p className={styles.inputs}><strong>Endereço:</strong> </p>
                    <p className={styles.inputs}><strong>Telefone:</strong></p>
                    <p className={styles.inputs}><strong>Perfil:</strong> </p>
                    <p className={styles.inputs}><strong>Redes Sociais:</strong></p>
                    <p className={styles.inputs}><strong>Status Atual:</strong></p>
              </div>
              </div>
            </div>
          </div>
  
          <form className={styles.barraenvia} action={`?id=${dado}`} method="post">
            <select className={styles.notas} name="avaliar" required>
              <option className={styles.resultado} value="">Avaliar</option>
              <option className={styles.resultado} value="1">Reprovada</option>
              <option className={styles.resultado} value="3">Corrigir</option>
              <option className={styles.resultado} value="2">Aprovada</option>
            </select>
            <input className={styles.inputs} type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    );
  }