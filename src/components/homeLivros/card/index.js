import Image from 'next/image';
import styles from './index.module.css';

export default function Card({livro}) {
    return (
        <div className={styles.card}>
            <div className={styles.ImagemContainer}>
                <Image
                    src={livro.imgLivro}
                    alt={livro.nome}
                    width={200}
                    height={200}
                    className={styles.imagemLivro}
                />
            </div>
            <span className={styles.livroNome}>{livro.nome}</span>
                <span className={styles.livroAutor}>{livro.autor}</span>
                 <span className={styles.livroNomeResenha}>{livro.nomeResenha}</span>
                </div>
                );
}