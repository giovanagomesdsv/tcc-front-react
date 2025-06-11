import styles from './page.module.css';

export default function PaginaExemplo() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.texto}>Cabeçalho da Página</span>
      </div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo.jpg"
            alt="Exemplo"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p>Texto exemplo da descrição ao lado da imagem.</p>
            <button className={styles.botao}>Ação</button>
          </div>
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
            <p>Texto exemplo da descrição ao lado da imagem.</p>
            <button className={styles.botao}>Ação</button>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.conteudoCard}>
          <img
            src="/imagens/exemplo3.jpg"
            alt="Imagem exemplo 3"
            className={styles.imagem}
          />
          <div className={styles.descricao}>
            <p>Texto exemplo da descrição 3</p>
            <button className={styles.botao}>Ação</button>
          </div>
        </div>
      </div>
    </div>
  );
}