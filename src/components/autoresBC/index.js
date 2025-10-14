import styles from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';
import autores from '@/components/mockup/autores';

export default function autoresBC() {

    return (
        <div className={styles.cardContainer}>
            {
                autores.map(aut =>
                    <div key={aut.aut_id} className={styles.cardAut}>

                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <Image className={styles.image}
                                    src={aut.aut_foto}
                                    alt={aut.aut_nome}
                                    width={100}
                                    height={100}
                                />
                                <h1>{aut.aut_nome}</h1>
                            </div>
                            <div className={styles.cardBack}>
                                <p>{aut.aut_bio}</p>
                                <Link href={`/autores/autor`} className={styles.infoButton}>
                                    Mais Informações
                                </Link>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>


    )
}