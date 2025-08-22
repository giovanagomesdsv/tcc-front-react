import styles from './index.module.css';
import livrosHomeMockup from '@/components/mockup/livrosHome';
import Image from 'next/image';

export default function classicosBC() {
  return (
    <div className={styles.box}>
      {livrosHomeMockup.map((classico, index) => {
        // Itens verticais (esquerda)
        if (index === 0 || index === 1) {
          return (
            <a key={livro.livro_titulo} href="#">
              <div className={`${styles.box1} ${styles['box-vert1']}`}>
                <div className={styles.vert1}>
                  <div className={styles.image}>
                    <Image
                      src={livro.livro_foto}
                      alt={livro.livro_titulo}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className={styles.info}>
                    <p style={{ fontSize: '1rem' }}>{livro.livro_subtitulo}</p>
                    <p style={{ fontSize: '2rem' }}>{livro.livro_titulo}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        }

        // Itens horizontais (direita)
        if (index === 2 || index === 3) {
          return (
            <a key={livro.livro_titulo} href="#">
              <div className={`${styles.box1} ${styles['box-hor1']}`}>
                <div className={styles.hor1}>
                  <div className={styles.image}>
                    <Image
                      src={livro.livro_foto}
                      alt={livro.livro_titulo}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className={styles.info}>
                    <p>{livro.livro_subtitulo}</p>
                    <p>{livro.livro_titulo}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        }

        // Se passar do índice planejado
        return null;
      })}
    </div>
  );
}
