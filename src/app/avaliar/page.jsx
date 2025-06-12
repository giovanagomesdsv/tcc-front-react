import styles from './page.module.css';

export default function PaginaExemplo() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.mensagem}>Olá Usuário, seja bem vindo!</span>
      </div>
      <div className={styles.avaliar}>
        <div className={styles.textnotificaçao}> AVALIAR</div></div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p className={styles.inputText}>Livraria</p>
            <br />
            <br />
            <br />
            <p className={styles.inputText}>Usuario</p>
          </div>
          <button className={styles.botao}>Avaliar</button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p className={styles.inputText}>Livraria</p>
            <br />
            <br />
            <br />
            <p className={styles.inputText}>Usuario</p>
          </div>
          <a href={"avaliar/avaliar-livraria"}>
          <button className={styles.botao}>Avaliar</button>
          </a>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p className={styles.inputText}>Resenhista</p>
            <br />
            <br />
            <br />
            <p className={styles.inputText}>Usuario</p>
          </div>
          <a href={"avaliar/avaliar-resenha"}>
          <button className={styles.botao}>Avaliar</button>
          </a>
        </div>
      </div>
    </div>
  );
}