import styles from './index.module.css';
import livrosHomeMockup from '@/components/mockup/livrosHome';
import Image from 'next/image';

export default function livrosHomeBC() {
  return (
    <div className={styles.gridContainer}>
      {livrosHomeMockup.map((livro, index) => {
        // Para caixa1, caixa2, caixa3, caixa4 normalmente
        if (index < 4) {
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

        // Para caixa5 e caixa6 (precisam de um container conjunto)
        if (index === 4) {
          return (
            <div key="caixa56" className={styles.caixa56Container}>
              {[livrosHomeMockup[4], livrosHomeMockup[5]].map((liv, i) => (
                <div key={liv.livro_titulo} className={`${styles[`caixa${5 + i}`]} ${styles.caixa}`}>
                  <Image
                    src={liv.livro_foto}
                    alt={liv.livro_titulo}
                    className={styles.imagem}
                    fill
                  />
                  <span className={styles.textoCanto}>{liv.livro_titulo}</span>
                </div>
              ))}
            </div>
          );
        }

        // Para caixa7
        if (index === 6) {
          return (
            <div key={livro.livro_titulo} className={`${styles.caixa7} ${styles.caixa}`}>
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

        return null;
      })}
    </div>
  );
}
