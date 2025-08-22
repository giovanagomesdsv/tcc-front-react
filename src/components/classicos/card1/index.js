import Image from 'next/image';
import styles from './index.module.css';

export default function Card({ classico }) {
    return (
        <div className={styles.card1}>
            <div className={styles.box}>
               <div className={`${styles.caixa4} ${styles.caixa}`}>
                            <Image
                                src={livro.livro_id}   // caminho da imagem no mockup
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