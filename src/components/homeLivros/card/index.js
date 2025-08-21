import Image from 'next/image';
import styles from './index.module.css';

export default function Card({ livro }) {
    return (
        <div className={styles.card}>
            <div className={styles.ImagemContainer}>
               <div className={`${styles.caixa4} ${styles.caixa}`}>
                            <Image
                                src={livro.livro_foto}   // caminho da imagem no mockup
                                alt={livro.nome}         // nome do livro
                                width={200}
                                height={200}
                                className={styles.imagem}
                            />
                            <span className={styles.textoCanto}>{livro.livro_titulo}</span>
                            <span className={styles.textoCanto}>{livro.livro_sinopse}</span>
                            <span className={styles.textoCanto}>{livro.livro_classidd}</span>
                        </div>
            </div>
            
        </div>
    );
}