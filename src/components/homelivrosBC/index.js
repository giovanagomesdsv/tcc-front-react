import styles from './index.module.css';
import livrosHomeMockup from '@/components/mockup/livrosHome';
import Image from 'next/image';

export default function livrosHomeBC() {
    return (
        <div className={styles.gridContainer}>
            {livrosHomeMockup.map((livro, index) => {
                // Cria dinamicamente caixa1, caixa2, caixa3, caixa4
                const caixaClass = styles[`caixa${index + 1}`]; 

                return (
                    <div key={livro.livro_titulo} className={`${caixaClass} ${styles.caixa}`}>
                        <Image
                            src={livro.livro_foto}
                            alt={livro.livro_titulo}
                            className={styles.imagem}
                            fill // Next.js precisa disso pra ocupar a div
                        />
                        <span className={styles.textoCanto}>{livro.livro_titulo}</span>
                    </div>
                );
            })}
        </div>
    );
}
