import styles from "./page.module.css";

export default function ReviewCard({ foto, titulo, sinopse, texto, autor, dado }) {
    return (
      <>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardimgsinopse}>
            <div className={styles.sinopse}>
              <p>{titulo}</p>
              <p><strong>Sinopse</strong></p>
              <p>{sinopse}</p>
            </div>
          </div>
  
          <div className={styles.cardresenha}>
            <div className={styles.resenha}>
              <p><strong>RESENHA</strong></p>
              <p>{texto}</p>
              <p>{autor}</p>
            </div>
          </div>
  
          <form className={styles.barraenvia} action={`?id=${dado}`} method="post">
            <select className={styles.notas} name="avaliar" required>
              <option className={styles.resultado} value="">Avaliar</option>
              <option className={styles.resultado} value="1">Reprovada</option>
              <option className={styles.resultado} value="3">Corrigir</option>
              <option className={styles.resultado} value="2">Aprovada</option>
            </select>
            <input className={styles.teste} type="submit" value="Enviar" />
          </form>
        </div>
      </>
    );
  }