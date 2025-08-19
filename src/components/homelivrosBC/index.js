import styles from './index.module.css';
import livrosHomeMockup from '@/components/mockup/livrosHome';
import Card from '../homeLivros/card';

export default function livrosHomeBC() {

    //console.log(livrosHomeMockup);
    return (
        <div className={styles.livros}>
            {/*  
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
                 */}

            {
                livrosHomeMockup.map(livro => <Card key={livro.id} livro={livro} />)
            }
        </div >
    );
}