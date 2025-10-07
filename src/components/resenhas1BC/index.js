import styles from './index.module.css';
import resenhas from '@/components/mockup/resenhas1';
import Image from 'next/image';

export default function livrosHomeBC() {
  return (
    <div className={styles.gridContainer}>
      {resenhas.map((livro, index) => {
        if (!livro) return null; // Segurança: ignora elementos undefined

        // Caixa 1 e 2
        if (index < 2) {
          const caixaClass = styles[`caixa${index + 1}`];
          return (
            <div key={livro.livro_titulo} className={`${caixaClass} ${styles.caixa}`}>
              <Image
                src={livro.livro_foto}
                alt={livro.livro_titulo}
                className={styles.imagem}
                fill
              />
              <span className={styles.textoCanto}>{livro.livro_titulo}</span>
            </div>
          );
        }

        // Caixa 5 e 6 (container conjunto)
        if (index === 3 && resenhas[4]) {
          const livroExtra = resenhas[4];
          return (
            <div key="caixa56" className={styles.caixa3}>
              <div key={livroExtra.livro_titulo}>
                <Image
                  src={livroExtra.livro_foto}
                  alt={livroExtra.livro_titulo}
                  className={styles.imagem}
                  fill
                />
                <span className={styles.textoCanto}>{livroExtra.livro_titulo}</span>
                <span className={styles.resenha3}>{livroExtra.livro_sinopse}</span>
              </div>
            </div>
          );
        }

        // Caixa 7
        if (index === 4) {
          return (
            <div key={livro.livro_titulo}>
              <Image
                src={livro.livro_foto}
                alt={livro.livro_titulo}
                className={styles.imagem}
                fill
              />
              <span className={styles.textoCanto}>{livro.livro_titulo}</span>
              <span className={styles.resenha4}>{livro.livro_sinopse}</span>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
