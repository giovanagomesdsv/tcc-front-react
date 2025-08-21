import styles from './index.module.css';
import livrosHomeMockup from '@/components/mockup/livrosHome';
import Image from 'next/image';

export default function livrosHomeBC() {
    return (
        <div className={styles.livros}>
            {livrosHomeMockup.map(livro => (
                <div key={livro.id} className={styles.card}>
                    <div className={styles.ImagemContainer}>
                        <div className={`${styles.caixa1} ${styles.caixa}`}>
                            <Image
                                src={livro.livro_foto}   // caminho da imagem no mockup
                                alt={livro.nome}         // nome do livro
                               
                            
                            />
                            <span className={styles.textoCanto}>{livro.livro_titulo}</span>
                            <span className={styles.textoCanto}>{livro.livro_sinopse}</span>
                            <span className={styles.textoCanto}>{livro.livro_classidd}</span>
                        </div>

                        <div className={`${styles.caixa2} ${styles.caixa}`}>
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

                        <div className={`${styles.caixa3} ${styles.caixa}`}>
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

                        <div className={`${styles.caixa5} ${styles.caixa}`}>
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

                        <div className={`${styles.caixa6} ${styles.caixa}`}>
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

                        <div className={`${styles.caixa7} ${styles.caixa}`}>
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
            ))}
        </div>
    );
}
