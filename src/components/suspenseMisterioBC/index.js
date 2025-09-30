"use client"; // necessário para hooks 

import styles from './index.module.css';
import { suspense, livroSuspense } from '@/components/mockup/suspenseMisterio';
import Image from 'next/image';
import { useState } from 'react';

export default function suspenseMisterioBC() {
    const [generoSelecionado, setGeneroSelecionado] = useState(2);

    const livrosFiltrados = suspense.filter(livro =>
        livroSuspense.some(
            rel => rel.livro_id === livro.livro_id && rel.gen_id === generoSelecionado
        )
    );

    return (
        <div>
            {/* Título */}
            <h2 className={styles.titulo}>ROGER</h2>

            {/* Filtros de gênero */}
            <div className={styles.filtros}>
                <button onClick={() => setGeneroSelecionado(2)}>Suspense e Mistério</button>
            </div>

            {/* Layout especial de livros */}
            <div className={styles.grid}>
                <div className={styles.container}>

                    {/* Duas imagens lado a lado */}
                    <div className={styles.ladoALado}>
                        {livrosFiltrados.slice(0, 2).map((livro) => (
                            <div key={livro.livro_id} className={styles.card}>
                                <Image
                                    src={livro.livro_foto}
                                    alt={livro.livro_titulo}
                                    width={200}
                                    height={280}
                                />
                                <p className={styles.autor}>
                                    {livro.livro_id % 2 === 0 ? 'AtticusR' : 'Malfoy'}
                                </p>
                                <h3>{livro.livro_titulo}</h3>
                            </div>
                        ))}
                    </div>
                    {/* Duas imagens empilhadas */}
                    <div className={styles.empilhado}>
                        {livrosFiltrados.slice(2, 4).map((livro) => (
                            <div key={livro.livro_id} className={styles.card}>
                                <Image
                                    src={livro.livro_foto}
                                    alt={livro.livro_titulo}
                                    width={200}
                                    height={280}
                                />
                                <p className={styles.autor}>
                                    {livro.livro_id % 2 === 0 ? 'AtticusR' : 'Malfoy'}
                                </p>
                                <h3>{livro.livro_titulo}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
