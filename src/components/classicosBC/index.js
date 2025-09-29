"use client"; // necessário para hooks 

import styles from './index.module.css';
import { classicos, livroGenero } from '@/components/mockup/classicos';
import Image from 'next/image';
import { useState } from 'react';

export default function ClassicosBC() {
    const [generoSelecionado, setGeneroSelecionado] = useState(2);

    const livrosFiltrados = classicos.filter(livro =>
        livroGenero.some(
            rel => rel.livro_id === livro.livro_id && rel.gen_id === generoSelecionado
        )
    );

    return (
        <div className={styles.box}>
            {/* Título */}
            <h2 className={styles.titulo}>CLÁSSICOS</h2>



            {/* Layout especial de livros */}


            {/* Duas imagens lado a lado */}
            <div className={styles.vert1}>
                {livrosFiltrados.slice(0, 2).map((livro) => (
                    <div key={livro.livro_id} className={styles.image}>
                        <Image
                            src={livro.livro_foto}
                            alt={livro.livro_titulo}
                            width={200}
                            height={250}
                        />
                        <p className={styles.info}>
                            {livro.livro_id % 2 === 0 ? 'AtticusR' : 'Malfoy'}
                        </p>
                        <h3>{livro.livro_titulo}</h3>
                    </div>


                ))}
            </div>


            {/* Duas imagens empilhadas */}
            <div className={styles.hor1}>

                {livrosFiltrados.slice(2, 4).map((livro) => (
                    <div key={livro.livro_id} className={styles.image}>
                        <Image
                            src={livro.livro_foto}
                            alt={livro.livro_titulo}
                            width={200}
                            height={250}
                        />
                        <p className={styles.info}>
                            {livro.livro_id % 2 === 0 ? 'AtticusR' : 'Malfoy'}
                        </p>
                        <h3>{livro.livro_titulo}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
